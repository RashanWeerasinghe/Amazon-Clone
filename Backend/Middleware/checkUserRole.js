const UserModel = require("../Model/userModel");

function checkUserRole(allowedRoles) {
  return async (req, res, next) => {
    const userId = req.params.id;
    let user;
    try {
      UserModel.getUserById(userId, (err, item) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "Server error" });
        }

        user = item[0].name;

        if (!user) {
          return res.status(404).json({
            error: "User not found",
          });
        }
        console.log(allowedRoles.includes(user));
        if (!allowedRoles.includes(user)) {
          return res.status(403).json({ error: "Access denied" });
        }
        next();
      });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  };
}

module.exports = checkUserRole;
