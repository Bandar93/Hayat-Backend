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
    // REVIEW: This should be in the user model
    gender: {
      // REVIEW: gender should be enum, male or female
      type: String,
    },
    // REVIEW: Why do you have the age, gender, civilId and phone here? The owner will fetch all this data for you
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
