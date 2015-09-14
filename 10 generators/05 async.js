

function getJSON(url) {
  return Promise.resolve(url);
}

async function getAllData() {
  let article  = await getJSON('/articles/latest');
  let comments = await getJSON('/articles/' + article.id + '/comments');
  let data     = await getJSON('/some/other/data');
  
  return [article, comments, data];
}

getAllData().then(function([article, comments, data]) {
  // all data loaded, good to go.
}).catch(function() {
  // handle error
});
