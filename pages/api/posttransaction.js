// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDb from "../../middleware/mongoose";
import Order, { findOneAndUpdate } from "../../models/Order";
const handler = async (req, res) => {
  console.log(req);
  let updatedOrder = await Order.findOneAndUpdate(
    { orderId: req.body.ORDERID },
    {
      status: req.body.STATUS,
      paymentInfo: JSON.stringify(req.body),
    }
  );

  return res.redirect("/order?id=" + updatedOrder._id, 200);
};
export default connectDb(handler);
