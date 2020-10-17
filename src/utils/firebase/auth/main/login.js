export const login = async () => {
  try {
    const { firebase } = await import(
      /* webpackPreferch: true */
      /* webpackChunkName: "firebase-auth" */
      '../index'
    );
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  } catch (error) {
    console.error(error);
  }
};
