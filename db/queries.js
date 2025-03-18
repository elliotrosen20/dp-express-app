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

async function deleteAllUsernames() {
  await pool.query("DELETE FROM usernames");
  await pool.query("ALTER SEQUENCE usernames_id_seq RESTART WITH 1;");
}

module.exports = {
  getAllUsernames,
  searchUsernames,
  insertUsername,
  deleteAllUsernames
};
