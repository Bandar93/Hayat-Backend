const express = require("express");
const { signup, signin, updateProfile } = require("./users.controllers");
const passport = require("passport");
const upload = require("../../middleware/multer");
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
  upload.single("image"),
  updateProfile
);

module.exports = router;
