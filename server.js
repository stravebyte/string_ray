const express = require("express");
const Models = require("./mongoDB");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/create", async (req, res) => {
  const data = req.body;
  await Models.userModel.create({
    story: req.body.story,
  });
});

app.get("/receive", async (req, res) => {
  const story = await Models.storyModel.find();
  const random_index = Math.floor(Math.random() * story.length);
  res.json(story[random_index]);
});

app.listen(3060);
