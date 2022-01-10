import dbConnect from "../../../lib/mongo";
import Post from "../../../schemas/Post";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    try {
      const post = await Post.findById(req.query.id);
      !post && res.status(404).json("Post Not founded");
      res.json(post);
    } catch (err) {
      res.json(err.message);
    }
  }
}
