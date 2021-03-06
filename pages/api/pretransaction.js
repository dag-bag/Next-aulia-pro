const https = require("https");
import connectDb from "../../middleware/mongoose";
import Order from "../../models/Order";
const PaytmChecksum = require("paytmchecksum");
/*
 * import checksum generation utility
 * You can get this utility from https://developer.paytm.com/docs/checksum/
 */
let mid = "ACMcaY34980573593721";
let mkey = "b2hxQWZCw0AMt1Qc";
const handler = async (req, res) => {
  if (req.method === "POST") {
    var paytmParams = {};
    console.log(req.body);
    let body = req.body;

    let order = await new Order({
      orderId: body.orderid,
      name: body.name,
      email: body.email,
      phone: body.phone,
      products: body.Cart,
      address: body.address,
      total: body.amount,
    });
    await order.save();

    paytmParams.body = {
      requestType: "Payment",

      mid: mid,
      websiteName: "YOUR_WEBSITE_NAME",
      orderId: body.orderid,

      callbackUrl: "/api/posttransaction",
      txnAmount: {
        value: body.amount,
        currency: "INR",
      },
      userInfo: {
        custId: "CUST_02",
      },
    };

    /*
     * Generate checksum by parameters we have in body
     * Find your Merchant Key in your Paytm Dashboard at https://dashboard.paytm.com/next/apikeys
     */
    let checksum = await PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams.body),
      mkey
    );
    paytmParams.head = {
      signature: checksum,
    };

    var post_data = JSON.stringify(paytmParams);

    var options = {
      /* for Staging */
      hostname: "securegw-stage.paytm.in" /* for Production */, // hostname: 'securegw.paytm.in',

      port: 443,
      path: `/theia/api/v1/initiateTransaction?mid=${mid}&orderId=${body.orderid}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": post_data.length,
      },
    };
    const gettoken = async () => {
      return new Promise((resovlve, reject) => {
        var response = "";
        var post_req = https.request(options, function (post_res) {
          post_res.on("data", function (chunk) {
            response += chunk;
          });

          post_res.on("end", function () {
            // console.log("Response: ", response);
            resovlve(response);
            // return (ctx.body = response);
          });
        });

        post_req.write(post_data);
        post_req.end();
        // const data = async () => {};
        // ctx.body = response;
      });
    };
    let myr = await gettoken();

    // res.redirect("/ordersucess");
    res.send(JSON.parse(myr));
  }
};
export default connectDb(handler);
