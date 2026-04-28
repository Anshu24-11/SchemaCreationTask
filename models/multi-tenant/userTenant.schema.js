const mongoose = require("mongoose");

const userTenantSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tenantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tenant",
      required: true,
    },
    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },
    teamId: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
  },
  { timestamps: true },
);
userTenantSchema.index({ userId: 1, tenantId: 1 }, { unique: true });
userTenantSchema.index({ teamId: 1, tenantId: 1 });
const UserTenant = mongoose.model("UserTenant", userTenantSchema);
module.exports = UserTenant;
