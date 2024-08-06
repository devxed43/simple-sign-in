const usernamePrompt = prompt("enter username");
const passwordPrompt = prompt("enter password");

const database = [
  {
    username: "user1",
    password: "apple",
  },
  {
    username: "user2",
    password: "bananas",
  },
  {
    username: "user3",
    password: "oranges",
  },
];

const newsfeed = [
  {
    username: "timmy",
    post: "javascript is cool!",
  },
  {
    username: "jimmy",
    post: "javascript is not cool!",
  },
  {
    username: "beth",
    post: "javascript is my favorite!",
  },
];

// Sign In
function signIn(username, password) {
  for (let i = 0; i < database.length; i++) {
    if (
      username === database[0].username &&
      password === database[0].password
    ) {
      alert('success signing in');
      return;
    } else {
      alert("error signing in");
      return;
    }
  }
}

signIn(usernamePrompt, passwordPrompt);
