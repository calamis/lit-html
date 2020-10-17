import { setRoutes, addRouteChangeErrorHandler } from '@tjmonsi/lit-router';
import { route as pageHome } from './page-home/route';
import { route as pageLogin } from './page-login/route';
import { route as pageLogout } from './page-logout/route';
import { route as pageEditBlog } from './page-edit-blog/route';
import { route as pageViewBlog } from './page-view-blog/route';
import { route as page404 } from './page-404/route';

setRoutes({
  '/': pageHome,
  '/login': pageLogin,
  '/logout': pageLogout,
  '/create/blog': pageEditBlog,
  '/blog/:id/:method': pageEditBlog,
  '/blog/:id': pageViewBlog,
  'not-found': page404
});

addRouteChangeErrorHandler(/** @param {*} event */ event => {
  const { detail } = event;
  console.log(detail);
});
