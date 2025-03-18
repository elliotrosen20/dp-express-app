const db = require("../db/queries");

async function getUsernames(req, res) {
  const searchQuery = req.query.search;

  let usernames;
  if (searchQuery) {
    usernames = await db.searchUsernames(searchQuery);
  } else {
    usernames = await db.getAllUsernames();
  }
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  res.render("form", {
    title: "Create User",
  });
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost
};
