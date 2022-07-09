import connectDb from "../../middleware/mongoose";
import User from "../../models/User";
const handler = async (req, res) => {
  if (req.method === "POST") {
    try {
      const token = await req.body;

      let data = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET);
      if (data.verified === false) {
        let updateUser = await User.findOneAndUpdate(
          { email: data.email },
          {
            verification: true,
          }
        );
        return res
          .status(200)
          .json({ success: true, msg: "User Verified succefully" });
      } else {
        return res
          .status(200)
          .json({ success: true, msg: "User Already Verified succefully" });
      }
    } catch (error) {
      return res
        .status(403)
        .json({ success: false, msg: "User is not Verified succefully" });
    }

    // let newProduct = await new User(req.body);
    // await newProduct.save();
  } else {
    return res.status(400).json({ error: "Invalid user", success: false });
  }
};
export default connectDb(handler);
