const express = require("express");
const router = express.Router();
const keccak256 = require("keccak256");
const { sign } = require("jsonwebtoken");

const { validateToken } = require("../middleware/auth");

const { User } = require("../models/");

router.post("/user", async (req, res) => {
  const { login, email, pwd } = req.body;
  const hash = keccak256(pwd).toString("hex");
  try {
    await User.create({ login: login, email: email, pwd: hash });
    return res.json("Created.");
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  const { login, pwd } = req.body;
  try {
    const user = await User.findOne({ where: { login: login } });
    if (!user) return res.json({ error: "User doesn't exist" });

    const hash = keccak256(pwd).toString("hex");
    if (user.pwd !== hash) return res.json({ error: "Invalid password" });

    const token = sign({ login: user.login, id: user.id }, "bruh");

    return res.json(token);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/profile", validateToken, async (req, res) => {
  try {
    const login = req.user; 
    const user  = await User.findOne({ where: { login: login }}); 
    return res.json(user); 
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/users", validateToken, async (req, res) => {
  const user = await User.findAll();
  return res.json(user);
});

module.exports = router;
