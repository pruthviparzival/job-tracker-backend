import { loginUser } from "./User/login.js";
import { logoutUser } from "./User/logout.js";
import { getCurrentUser } from "./User/me.js";
import { registerUser } from "./User/register.js";

const userController = {
  register: registerUser,
  login: loginUser,
  logout: logoutUser,
  me: getCurrentUser,
};

export { userController };
