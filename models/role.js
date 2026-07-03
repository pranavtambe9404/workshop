const mongoose = require("mongoose");
const { Schema } = mongoose;

const RoleSchema = new Schema(
  {
    name: String,

    description: String,

    permissions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "permission"
      }
    ]
  },
  {
    timestamps: true,
    collection: "roles"
  }
);

const role = mongoose.model("role", RoleSchema);

module.exports = role;