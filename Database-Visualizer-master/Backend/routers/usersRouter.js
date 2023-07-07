const Model = require("../models/usersModel");
const router = require("express").Router();

router.post("/add", (req, res) => {
  console.log(req.body);
  new Model(req.body)
    .save()
    .then((result) => {
      console.log(result);
      console.log("data saved");
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

router.post("/authenticate", (req, res) => {
  Model.findOne({ email: req.body.email, password: req.body.password })
    .then((userdata) => {
      if (userdata) {
        res.status(200).json(userdata);
      } else {
        res.status(300).json({ message: "Invalid Credentials" });
      }
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

router.get('/getall', (req, res) => {
  Model.find({})
  .then((result) => {
      console.log(result);
      res.json(result);        
  }).catch((err) => {
      console.error(err);
      res.json(err);
  });
  //res.send('get all from user router')
})

module.exports = router;
