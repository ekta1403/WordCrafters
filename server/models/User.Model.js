import pool from "../config/db.js";

export const findUserByEmail = async (email) => {
  const [user] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
  return user.length ? user[0] : null;
};

export const createUser = async (F_name, L_name, email, hashedPassword) => {
  const sql = "INSERT INTO users (F_name, L_name,email, password) VALUES (?, ?, ?, ?)";
  await pool.query(sql, [F_name, L_name,email, hashedPassword]);
};

export const findUserById = async (id) => {
  const [user] = await pool.query("SELECT id, F_name, email FROM users WHERE id = ?", [id]);
  return user.length ? user[0] : null;
};
