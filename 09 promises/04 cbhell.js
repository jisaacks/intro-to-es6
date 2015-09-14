function getJSON(url) {
  //...
}

let articlePromise = getJSON('/articles/latest');

let commentsPromise = articlePromise.then(function(article) {
  return getJSON('/articles/' + article.id + '/comments');
});

let dataPromise = commentsPromise.then(function(comments) {
  return getJSON('/some/other/data');
});

Promise.all([articlePromise, 
             commentsPromise,
             dataPromise])

.then(function([article, comments, data]) {
  // all data loaded, good to go.
})

.catch(function(err) {
  // handle error
});
