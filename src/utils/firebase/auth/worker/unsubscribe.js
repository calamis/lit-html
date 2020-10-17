/**
 * @param {function} proxy
 */
export async function unsubscribe (proxy) {
  const { unsubscribeAuthChanged } = await import(
    /* webpackPreferch: true */
    /* webpackChunkName: "firebase-auth" */
    '../index'
  );
  unsubscribeAuthChanged(proxy);
}
