import dbConnect from "../../../lib/mongo";
import Post from "../../../schemas/Post";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "POST") {
    try {
      const newPost = await Post.create({
        name: req.body.name,
        title: req.body.title,
        body: req.body.body,
        comments: [],
      });
      await newPost.save();
      res.status(201).json(newPost);
    } catch (err) {
      res.json(err.message);
    }
  }
}
