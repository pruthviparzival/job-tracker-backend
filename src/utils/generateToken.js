import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true, // prevent XSS attacks (cross-site scripting attacks)
    sameSite: "lax", // CSRF attacks (cross-site request forgery attacks)
    secure: process.env.NODE_ENV !== "development", // it becomes secure  during
    //  production(true), in development (false)
  });
};

export default generateTokenAndSetCookie;
