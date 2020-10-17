export const logout = async () => {
  try {
    const { firebase } = await import(
      /* webpackPreferch: true */
      /* webpackChunkName: "firebase-auth" */
      '../index'
    );

    await firebase.auth().signOut();
  } catch (error) {
    console.error(error);
  }
};
