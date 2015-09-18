import asynk from './03 runner';
import {wait, mockPromise as getJSON} from '../helpers.js';
let done = wait();

asynk(function *() {
  let article  = yield getJSON('/articles/latest');
  let comments = yield getJSON('/articles/' + article.id + '/comments');
  let data     = yield getJSON('/some/other/data');
  
  // all data loaded, good to go.
  console.log(article, comments, data);
  done();

}()).catch(function(err) {
  // handle error
  console.log(err);
  done();
});
