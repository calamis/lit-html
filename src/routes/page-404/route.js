export const route = {
  component: 'page-404',
  loader: () => import(
    /* webpackPreferch: true */
    /* webpackChunkName: "page-404" */
    './index')
};
