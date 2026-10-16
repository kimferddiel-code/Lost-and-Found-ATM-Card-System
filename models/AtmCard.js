
const mongoose = require("mongoose");

const atmCardSchema = new mongoose.Schema(
  {
    recordId: {
      type: String,
      required: true,
      unique: true,
    },

    bankName: {
      type: String,
      required: true,
      trim: true,
    },

    maskedCardNumber: {
      type: String,
      required: true,
      trim: true,
    },

    dateFound: {
      type: Date,
      required: true,
      default: Date.now,
    },

    locationFound: {
      type: String,
      required: true,
      trim: true,
    },

    finderName: {
      type: String,
      required: true,
      trim: true,
    },

    storageLocation: {
      type: String,
      default: "Office",
    },

    status: {
      type: String,
      enum: ["Found", "In Custody", "Returned", "Transferred"],
      default: "Found",
    },

    dateReturned: {
      type: Date,
      default: null,
    },

    claimedBy: {
      type: String,
      default: "",
    },

    releasedBy: {
      type: String,
      default: "",
    },

    notes: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("AtmCard", atmCardSchema);
