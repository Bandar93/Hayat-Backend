const { model, Schema } = require("mongoose");

const RequestSchema = Schema(
  {
    name: {
      type: String,
    },
    fileNumber: {
      type: String,
    },
    description: {
      type: String,
    },
    bloodType: {
      type: String,
    },
    gender: {
      type: String,
    },
    age: {
      type: String,
    },
    civilId: {
      type: String,
    },
    phone: {
      type: String,
    },
    priority: {
      type: String,
      default: "NORMAL",
    },
    donate: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    location: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("Request", RequestSchema);
