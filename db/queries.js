// const { search } = require("../routes/usersRouter");
const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function searchUsernames(searchQuery) {
    const {rows} = await pool.query(
        "SELECT * FROM usernames WHERE username ILIKE $1", 
        [`%${searchQuery}%`]
    );
    return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

module.exports = {
  getAllUsernames,
  searchUsernames,
  insertUsername
};
