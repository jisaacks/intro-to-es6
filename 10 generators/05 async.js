import {wait, mockPromise as getJSON} from '../helpers.js';
let done = wait();

async function getAllData() {
  let article  = await getJSON('/articles/latest');
  let comments = await getJSON('/articles/' + article.id + '/comments');
  let data     = await getJSON('/some/other/data');
  
  return [article, comments, data];
}

getAllData().then(function([article, comments, data]) {
  // all data loaded, good to go.
  console.log(article, comments, data);
  done();

}).catch(function(err) {
  // handle error
  console.log(err);
  done();
});
