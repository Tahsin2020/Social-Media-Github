const router = require("express").Router();
let Completed_Project = require("../models/completed-project.js");
let Ongoing_Project = require("../models/ongoing-project.js");
let Organization = require("../models/organization.js");
let Experience = require("../models/experience.js");

let ItemTypes = {
  Completed_Project: Completed_Project,
  Ongoing_Project: Ongoing_Project,
  Organization: Organization,
  Experience: Experience,
};

router.route("/").get((req, res) => {
  const item = req.body.item;
  const Type = ItemTypes[item];
  Type.find()
    .then((items) => res.json(items))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const item = req.body.item;
  const Type = ItemTypes[item];

  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newItem = new Type({
    username,
    description,
    duration,
    date,
  });

  newItem
    .save()
    .then(() => res.json("Item added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  const item = req.body.item;
  const Type = ItemTypes[item];

  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  const item = req.body.item;
  const Type = ItemTypes[item];

  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  const item = req.body.item;
  const Type = ItemTypes[item];

  Exercise.findById(req.params.id)
    .then((exercise) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = Number(req.body.duration);
      exercise.date = Date.parse(req.body.date);

      exercise
        .save()
        .then(() => res.json("Exercise updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
