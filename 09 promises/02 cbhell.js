function getJSON(url, cb) {
  // mock url loading...
  cb(url);
}

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
    });
  });
});
