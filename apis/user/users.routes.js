const express = require("express");
const {
  signup,
  signin,
  updateProfile,
  updateScore,
  changePassword,
} = require("./users.controllers");
const passport = require("passport");
const router = express.Router();

router.post("/signup", signup);

router.post(
  "/signin",
  passport.authenticate("local", { session: false }),
  signin
);

router.put(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  updateProfile
);

router.put(
  "/score",
  passport.authenticate("jwt", { session: false }),
  updateScore
);

// router.put(
//   "/userId",
//   passport.authenticate("jwt", { session: false }),
//   changePassword
// );

module.exports = router;
