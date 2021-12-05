const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bloodType: {
      type: String,
      required: true,
  },
  civilId: {
      type: String,
      unique: true,
  },
  phone: {
    type: String,
    unique: true,
  },

});
module.exports = model("User", userSchema);