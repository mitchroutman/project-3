const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const jwtkey = "jwtsecrect";
const router = express.Router();
const User = mongoose.model("User");

router.get("/test", (req, res) => {
  res.send("hello world");
});

//@signup
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  if (!email || !password || !username) {
    return res.status(422).send({ error: "please fill all fields" });
  }
  const username2 = await User.findOne({ username });

  if (username2) {
    return res.status(422).send({ error: "this username is already taken" });
  }

  try {
    const user = new User({ username, email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, jwtkey);
    res.send({ payload: user, token: token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

//@sigin

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).send({ error: "must provide email or password" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(422).send({ error: "must provide email or password" });
  }
  try {
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, jwtkey);
    res.status(200).send({ payload: user, token: token, success: true });
  } catch (err) {
    return res.status(422).send({ error: "must provide email or password" });
  }
});

module.exports = router;