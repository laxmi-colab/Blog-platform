const express = require("express");
const Post = require("../models/Post");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", async (req, res) => {
  const posts = await Post.find()
    .populate("author", "username")
    .sort({ createdAt: -1 });

  res.json(posts);
});

router.post("/", auth, async (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.user.id
  });

  await post.save();

  res.json(post);
});

router.put("/:id", auth, async (req, res) => {
  const post = await Post.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(post);
});

router.delete("/:id", auth, async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);

  res.json({
    message: "Post Deleted"
  });
});

module.exports = router;