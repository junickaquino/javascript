// ===========================
// Mimic Blogpost in a server
// ===========================

/*
    Problem: Does not display Post Three
    because the setTimeout for CreatePost takes longer than the getPosts function.
    By the time CreatePost was executed, the system already displayed the available posts.

*/

const posts = [
  {
    title: "Post One",
    body: "This is post one",
  },
  {
    title: "Post Two",
    body: "This is post two",
  },
];

function getPosts() {
  setTimeout(() => {
    let output = "";

    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}

getPosts();

createPost({
  title: "Post Three",
  body: "This is post three",
});
