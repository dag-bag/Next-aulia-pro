const mongoose = require("mongoose");
const { Schema } = mongoose;
const orderSchema = new Schema(
  {
    orderId: {
      type: String,
      required: true,
    },
    paymentInfo: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },

    products: { type: Object },

    address: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
  },
  { timestamps: true }
);
mongoose.models = {};
module.exports = mongoose.model("Order", orderSchema);
