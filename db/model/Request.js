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
      type: Number,
    },
    civilId: {
      type: Number,
    },
    phone: {
      type: Number,
    },
    priority: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = model("Request", RequestSchema);
