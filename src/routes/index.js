import { setRoutes, addRouteChangeErrorHandler } from '@tjmonsi/lit-router';
import { route as pageHome } from './page-home/route';
import { route as page404 } from './page-404/route';

setRoutes({
  '/': pageHome,
  'not-found': page404
});

addRouteChangeErrorHandler(/** @param {*} event */ event => {
  const { detail } = event;
  console.log(detail);
});
