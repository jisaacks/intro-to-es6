import {wait, mockCallBack as getJSON} from '../helpers.js';
let done = wait();

getJSON('/articles/latest', function(err, article) {
  if (err) {
    // handle error
    return;
  }
  var commentsUrl = '/articles/' + article.id + '/comments';
  getJSON(commentsUrl, function(err, comments){
    if (err) {
      // handle error
      return;
    }

    getJSON('/some/other/data', function(err, data) {
      if (err) {
        // handle error
        return;
      }

      // all data loaded, good to go.
      console.log(article, comments, data);
      done();
    });
  });
});
