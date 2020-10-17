import { firebase } from '../index';
import 'firebase/auth';

const functions = new Map();
let userInitialized = false;

/**
 *
 * @param {function} fn
 */
export async function subscribeAuthChanged (fn) {
  functions.set(fn, fn);
  if (userInitialized) {
    const {
      uid,
      photoURL,
      isAnonymous,
      emailVerified,
      email,
      displayName
    } = await getUser() || {};

    functions.get(fn)(uid
      ? {
        uid,
        photoURL,
        isAnonymous,
        emailVerified,
        email,
        displayName
      }
      : null);
  }
}

/**
 *
 * @param {function} fn
 */
export function unsubscribeAuthChanged (fn) {
  if (functions.has(fn)) functions.delete(fn);
}

export function getUser () {
  const { currentUser } = firebase.auth();

  if (userInitialized) {
    return currentUser;
  }

  return new Promise((resolve) => {
    firebase.auth().onAuthStateChanged(resolve);
  });
}

/**
 *
 * @param {*} user
 */
export async function updateUser (user) {
  for (const fn of functions.values()) {
    const promise = () => new Promise((resolve) => {
      const {
        uid,
        photoURL,
        isAnonymous,
        emailVerified,
        email,
        displayName
      } = user || {};

      fn(user
        ? {
          uid,
          photoURL,
          isAnonymous,
          emailVerified,
          email,
          displayName
        }
        : null);
      resolve();
    });

    promise();
  }
}

firebase.auth().onAuthStateChanged((user) => {
  userInitialized = true;
  updateUser(user);
});

export { firebase };
