import crypto from "crypto";
import jwt from "jsonwebtoken";
import authRepository from "../repositories/auth-repository";

const register = async (user: any) => {
  user.hashedPassword = crypto
    .createHash("md5")
    .update(user.hashedPassword)
    .digest("hex");

  const data: any = await authRepository.register(user);

  if (data.affectedRows > 0) {
    const token = jwt.sign(
      {
        username: user.username,
        email: user.email,
        isAdmin: false,
      },
      "SECRET"
    );
    return { success: true, token };
  } else {
    return { success: false, data };
  }
};

const login = async (user: any) => {
  user.hashedPassword = crypto
    .createHash("md5")
    .update(user.hashedPassword)
    .digest("hex");

  const data: any = await authRepository.login(user);

  if (data && data.length > 0) {
    const token = jwt.sign(
      {
        username: user.username,
        userId: data[0].id,
        isAdmin: data[0].is_admin == 1 ? true : false,
      },
      "SECRET"
    );
    return { success: true, token };
  } else {
    return { success: false, msg: "Not able to login" };
  }
};

export default { register, login };
