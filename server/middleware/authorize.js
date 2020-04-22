const jwt = require("jsonwebtoken");
require("dotenv").config();

//middleware will continue if the token is inside the local storage
module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header("jwt_token");

  // return if there is no token
  if (!token) {
    return res.status(403).json({ msg: "authorization denied" });
  }

  // Verify token
  try {
    //it is going to give the user id (user:{id: user.id})
    const verify = jwt.verify(token, process.env.jwtSecret);

    req.user = verify.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
