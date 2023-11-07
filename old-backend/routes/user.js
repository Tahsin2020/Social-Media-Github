const router = require("express").Router();
let User = require("../models/user");

router.route("/").get((req, res) => {
  var username = "hi";
  const newUser = new User({ username });
  User.find({})
  .then((users) => res.json(users))
  .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  var username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => {
      res.json("User added!");
      console.log(res);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
