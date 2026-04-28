const mongoose = require("mongoose");
const Tenant = require("./tenant.schema");
const { actions } = require("../../constant");
const auditLogSchema = new mongoose.Schema(
  {
    tenantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tenant",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    action: {
      type: String,
      enum: Object.values(actions),
      required: true,
    },
    entity: {
      type: String,
      required: true,
    },
    recordId: { type: mongoose.Schema.Types.ObjectId, required: true },
    before: { type: mongoose.Schema.Types.Mixed, default: null },
    after: { type: mongoose.Schema.Types.Mixed, default: null },
    metadata: {
      userId: { type: mongoose.Schema.Types.ObjectId },
    },
  },
  { timestamps: true },
);

const AuditLog = mongoose.model("AuditLog", auditLogSchema);
module.exports = AuditLog;
