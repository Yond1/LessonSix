const express = require("express");
const router = express.Router();

let NotesList = [{
  id: '3',
  note: 'lorem drewss qwefdsf sdawq'
}];

router.use(function access(req, res, next) {
  console.log("ACCESS REQUEST");
  next();
});

router.get("/posts", (req, res) => {
  res.status(200).json(NotesList);
});

router.post("/posts/:id", (req, res) => {
  NotesList.push(req.body);
  res.status(200).json("server active");
  res.status(200).json(NotesList);
});

router.delete("/delete/:id", (req, res) => {
  console.log(req.params.id);
  NotesList = NotesList.filter((item) => item.id !== req.params.id);
  res.json({ message: "remove access" });
});

module.exports = router;
