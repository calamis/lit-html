// @ts-ignore
import Worker from './index.worker.js';

/** @type {import('./core').core} */
let worker;

/** @type {function} */
let proxy;

if (process.env.NO_MODULE) {
  worker = require('./core').core;

  /**
   * a wrapper on the proxy function if it is not on module
   * @param {function} fn
   */
  proxy = (fn) => fn;
} else {
  // const Worker = require('./index.worker.js');
  const { wrap, proxy: proxyComlink } = require('comlink');
  const workerInstance = new Worker();
  worker = wrap(workerInstance);
  proxy = proxyComlink;
}

export {
  worker,
  proxy
};
