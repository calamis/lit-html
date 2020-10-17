export const route = {
  component: 'page-home',
  loader: () => import(
    /* webpackPreferch: true */
    /* webpackChunkName: "page-home" */
    './index')
};
