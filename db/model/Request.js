const { model, Schema } = require("mongoose");

const RequestSchema = Schema(
	{
		name: {
			type: String,
			required: true,
		},
		fileNumber: {
			type: String,
		},
        description: {
            type: String,
        },
		bloodType: { 
            type: String 
        },
		owner: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true }
);

module.exports = model("Request", RequestSchema);