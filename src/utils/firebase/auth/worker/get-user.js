export async function getUser () {
  const { getUser } = await import(
    /* webpackPreferch: true */
    /* webpackChunkName: "firebase-auth" */
    '../index'
  );

  const {
    uid,
    photoURL,
    isAnonymous,
    emailVerified,
    email,
    displayName
  } = await getUser() || {};

  return {
    uid,
    photoURL,
    isAnonymous,
    emailVerified,
    email,
    displayName
  };
}
