import dbConnection from "../common/db-connection";

const register = async (user: any) => {
  try {
    const data = await dbConnection.query(
      "INSERT INTO users (username, email, password, is_admin) VALUES (?, ?, ?, 0)",
      [user.username, user.email, user.hashedPassword]
    );
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const login = async (user: any) => {
  try {
    const data = await dbConnection.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [user.username, user.hashedPassword]
    );
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

export default { register, login };
