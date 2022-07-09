// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var jwt = require("jsonwebtoken");
import connectDb from "../../middleware/mongoose";
import Order from "../../models/Order";

const handler = async (req, res) => {
  const token = req.body.jwt;
  let data = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET);

  let email = data.email.trim();

  let orders = await Order.find({ email: email });
  res.status(200).json({ orders });

  // let newProduct = await new Product(req.body);
  // await newProduct.save();
};
export default connectDb(handler);
