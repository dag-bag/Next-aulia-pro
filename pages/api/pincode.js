// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  let pincodes = {
    110045: ["Palam", "Delhi"],
    110043: ["West", "West Bengal"],
    110047: ["Janakpuri", "South West Delhi"],
    110034: ["Goa", "Xyz"],
  };
  res.status(200).json(pincodes);
}
