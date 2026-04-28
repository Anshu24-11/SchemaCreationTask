const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    tenantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tenant",
      required: true,
    },
    permissions: { type: [String] },
  },
  { timestamps: true },
);

roleSchema.index({ name: 1, tenantId: 1 }, { unique: true });
const Role = mongoose.model("Role", roleSchema);
module.exports = Role;
