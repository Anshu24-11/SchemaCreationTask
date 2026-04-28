const mongoose = require("mongoose");

const versioningFields = {
  tenantId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  originalId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  version: {
    type: Number,
    required: true,
  },

  isLatest: {
    type: Boolean,
    default: true,
  },
};

//these are the fields which are required to implement versioning in models
