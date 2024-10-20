const mongoose = require("mongoose");

const url =
  "mongodb+srv://Stravecodes:5Kv8ue%40xQVX2-Js@strave.cyos8.mongodb.net/starx";
mongoose.connect(url);
const userSchme = mongoose.Schema({
  story: String,
});
const storySchme = mongoose.Schema({
  stories: String,
});
const userModel = mongoose.model("story", userSchme);
const storyModel = mongoose.model("random_story", storySchme);

storyModel.create({
  stories: `I remember sitting at a café with my grandmother one afternoon. She was telling me stories about her youth, about the dances she used to go to and the friends she had. There was this sparkle in her eye, a kind of joy that I hadn’t seen in her before. She laughed, and it was the kind of laugh that made you want to laugh too, even if you didn’t know why. I realized in that moment that she was more than just my grandmother—she was a person with a whole life I had barely begun to understand.`,
});

module.exports = {
  userModel,
  storyModel,
};
