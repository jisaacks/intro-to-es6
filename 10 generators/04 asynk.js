import asynk from './03 runner';

function getJSON(url) {
  return Promise.resolve(url);
}

asynk(function *() {
  let article  = yield getJSON('/articles/latest');
  let comments = yield getJSON('/articles/' + article.id + '/comments');
  let data     = yield getJSON('/some/other/data');
  
  // all data loaded, good to go.
}())
.catch(function() {
  // handle error
});
