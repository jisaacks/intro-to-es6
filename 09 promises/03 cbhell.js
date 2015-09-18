import {wait, mockPromise as getJSON} from '../helpers.js';
let done = wait();

getJSON('/articles/latest')

  .then(function(article) {
    return getJSON('/articles/' + article.id + '/comments');
  })

  .then(function(comments) {
    return getJSON('/some/other/data');
  })

  .then(function(data) {
    // all data loaded, good to go.
    console.log(article, comments, data);
    done();
  })

  .catch(function(err) {
    // handle error
    console.log(err);
    done();
  });
