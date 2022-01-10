import dbConnect from "../../../lib/mongo";
import Post from "../../../schemas/Post";

export default async function handler(req, res) {
  await dbConnect();
  if (req.method === "GET") {
    try {
      const allPosts = await Post.find({});
      res.status(200).json(allPosts);
    } catch (err) {
      res.json(err.message);
    }
  }
}
