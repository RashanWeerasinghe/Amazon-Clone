const UserModel = require("../Model/userModel");

function checkUserRole(allowedRoles) {
  return async (req, res, next) => {
    const userId = req.userId;
    try {
      const user = await UserModel.getUserById(userId);
      if (!user) {
        return res.status(404).json({
          error: "User not found",
        });
      }
      if (!allowedRoles.includes(user.role)) {
        return res.status(403).json({ error: "Access denied" });
      }
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Server error" });
    }
  };
}

module.exports = checkUserRole;
