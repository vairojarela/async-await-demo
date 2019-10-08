const posts = [
  {
    title: 'Post One',
    body: 'This is Post One'
  },
  {
    title: 'Post Two',
    body: 'This is Post Two'
  }
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`
    })
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 1000);
}

createPost({
  title: 'Post Three', body: 'This is Post Three'
}, getPosts);

