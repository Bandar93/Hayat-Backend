const User = require("../../db/model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_EXPIRATION_MS, JWT_SECRET } = require("../../config/keys");

const generateToken = (user) => {
  const payload = {
    _id: user._id,
    name: user.name,
    username: user.username,
    exp: Date.now() + JWT_EXPIRATION_MS,
  };

  const token = jwt.sign(payload, JWT_SECRET);
  return token;
};

exports.signup = async (req, res, next) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    req.body.password = hashedPassword;

    const newUser = await User.create(req.body);
    const token = generateToken(newUser);

    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

exports.signin = (req, res) => {
  const token = generateToken(req.user);
  res.json({ token });
};

exports.updateProfile = async (req, res, next) => {
  try {
    if (!req.user._id.equals(req.user._id)) {
      return next({ status: 401, message: "Not the Owner" });
    }

    if (req.file) {
      req.body.image = `/media/${req.file.filename}`;
      req.body.image = req.body.image.replace("\\", "/");
    }

    const profile = await User.findByIdAndUpdate(req.user, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(200).json(profile);
  } catch (error) {
    next(error);
  }
};
