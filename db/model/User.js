const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  bloodType: {
    type: String,
  },
  civilId: {
    type: String,
  },
  age: {
    type: String,
  },
  phone: {
    type: String,
  },
  image: {
    type: String,
  },
  score: {
    type: Number,
    default: 0,
  },
});
module.exports = model("User", userSchema);
