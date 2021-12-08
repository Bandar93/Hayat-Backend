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
  // REVIEW: civil id must be unique
  civilId: {
    type: String,
  },
  age: {
    type: String,
  },
  phone: {
    type: String,
  },
});
module.exports = model("User", userSchema);
