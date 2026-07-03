const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema(
  {
    from: {
      type: String,
      required: true,
    },

    to: {
      type: String,
      required: true,
    },

    fare: {
      type: Number,
      required: true,
    },

    vehicle: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Route", routeSchema);