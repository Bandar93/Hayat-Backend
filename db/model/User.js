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
  phone: {
    type: String,
  },
});
module.exports = model("User", userSchema);
