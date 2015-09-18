import {wait} from './runner.js';

export {wait};

export function mockCallBack(url, cb) {
  // mock url loading...
  cb(null, url);
}

export function mockPromise(url) {
  // mock url loading...
  return Promise.resolve(url);
}
