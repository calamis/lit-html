/**
 * @param {function} proxy
 */
export async function subscribe (proxy) {
  const { subscribeAuthChanged } = await import(
    /* webpackPreferch: true */
    /* webpackChunkName: "firebase-auth" */
    '../index'
  );
  subscribeAuthChanged(proxy);
}
