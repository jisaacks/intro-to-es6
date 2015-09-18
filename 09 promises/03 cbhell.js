function getJSON(url) {
  // mock url loading...
  return Promise.resolve(url);
}

getJSON('/articles/latest')

.then(function(article) {
  return getJSON('/articles/' + article.id + '/comments');
})

.then(function(comments) {
  return getJSON('/some/other/data');
})

.then(function(data) {
  // all data loaded, good to go.
})

.catch(function(err) {
  // handle error
});
