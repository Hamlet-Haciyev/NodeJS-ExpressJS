const express = require("express");
const router = express.Router();
// const bodyParser = require("body-parser");
const dataReq = require("../datas");
module.exports.data = function (req, res) {
  res.json(dataReq);
  // res.send(dataReq);
};
module.exports.uniqueID = (req, res) => {
  const present = dataReq.datas.find((dt) => dt.id == parseInt(req.params.id));
  console.log(present);
  res.json(present);
};

router.get("/", module.exports.data);
router.get("/:id", module.exports.uniqueID);

// app.get("/", (req, res) => {
//   const dt = path.join(__dirname, "data.json");
//   console.log(dt);
//   res.json(datas);
// });
router.post("/", (req, res) => {
  const reqBody = req.body;

  // dataReq.datas.push(reqBody);

  console.log(reqBody);
  // res.send(datas);
  res.json([...dataReq.datas, reqBody]);
});

router.put("/:id", (req, res) => {
  const foundData = dataReq.datas.find(
    (dt) => dt.id == parseInt(req.params.id)
  );

  foundData.title = req.body.title;
  foundData.desription = req.body.desription;
  foundData.image = req.body.image;
  foundData.file = req.body.file;

  console.log(foundData);

  res.json(dataReq.datas);
});
router.delete("/:id", (req, res) => {
  dataReq.datas = dataReq.datas.filter(
    (dt) => dt.id != parseInt(req.params.id)
  );
  res.json(dataReq.datas);
});

module.exports = router;
