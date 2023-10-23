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

var ObjectGrabber = function (map, item, values) {
  map["name"] = values.name;
  map["description"] = values.description;

  if (item == "Ongoing_Project" || item == "Completed_Project") {
    map["technologies"] = values.technologies;
    map["completion_date"] = Date.parse(values.completion_date);
  } else if (item == "Organization" || item == "Experience") {
    map["title"] = values.title;
    map["role"] = values.role;
  }
  return map;
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

  var newItemType = {};
  newItemType = ObjectGrabber(newItemType, item, req.body);

  const newItem = new Type(newItemType);

  newItem
    .save()
    .then(() => res.json("Item added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  const Type = ItemTypes[req.body.item];

  Type.findById(req.params.id)
    .then((item) => res.json(item))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  const Type = ItemTypes[req.body.item];

  Type.findByIdAndDelete(req.params.id)
    .then(() => res.json("Item deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  const itemType = req.body.item;
  const Type = ItemTypes[item];

  Type.findById(req.params.id)
    .then((item) => {
      item = ObjectGrabber(item, itemType, req.body);

      item
        .save()
        .then(() => res.json("item updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
