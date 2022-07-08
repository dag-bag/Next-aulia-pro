// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../../middleware/mongoose";
import Order, { findOneAndUpdate } from "../../models/Order";
const handler = async (req, res) => {
  if (req.body.STATUS === "TXN_SUCCESS") {
    let updatedOrder = await Order.findOneAndUpdate(req.body.ORDERID, {
      status: req.body.STATUS,
      paymentInfo: JSON.stringify(req.body),
    });
    res.redirect("/order?id=" + updatedOrder._id, 200);
  } else if (req.body.STATUS === "Pending") {
    let updateOrder = await Order.findOneAndUpdate(req.body.ORDERID, {
      status: req.body.STATUS,
      paymentInfo: JSON.stringify(req.body),
    });
    res.redirect("/checkout", 200);
  }
};
export default connectDb(handler);
