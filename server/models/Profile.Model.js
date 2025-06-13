import pool from "../config/db.js";

// Find User Profile by User ID
export const findUserProfileById = async (userId) => {
  const [profile] = await pool.query(
    `SELECT 
  users.id, 
  users.F_name, 
  users.L_name, 
  users.email, 
  up.profile_picture, 
  up.bio, 
  up.role, 
  up.location, 
  up.website
FROM users
LEFT JOIN user_profiles as up ON users.id = up.user_id
WHERE users.id = ?;
`,
    [userId]
  );
  return profile.length ? profile[0] : null;
};



// Create or Update User Profile
export const upsertUserProfile = async (userId, bio, role, location, website) => {
  const sql = `
      INSERT INTO user_profiles (user_id, bio, role, location, website, joined_at)
      VALUES (?, ?, ?, ?, ?, NOW())
      ON DUPLICATE KEY UPDATE 
      bio = ?, role = ?, location = ?, website = ?;
  `;

  await pool.query(sql, [userId, bio, role, location, website, bio, role, location, website]);
};


// Update Profile Picture
export const updateProfilePicture = async (userId, profilePicture) => {
  const sql = "UPDATE user_profiles SET profile_picture=? WHERE user_id=?";
  await pool.query(sql, [profilePicture, userId]);
};
