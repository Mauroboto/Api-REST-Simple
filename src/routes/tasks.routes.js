import { Router } from "express";
import connect from "../database.js";
import { ObjectId } from "mongodb";

const router = Router();

router.get("/", async (req, res) => {
  const db = await connect();
  const result = await db.collection("tasks").find({}).toArray();
  res.json(result);
});

router.post("/", async (req, res) => {
  const db = await connect();
  const task = {
    title: req.body.title,
    description: req.body.description,
  };
  const result = await db.collection("tasks").insertOne(task);

  res.json(result);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const result = await db
    .collection("tasks")
    .findOne({ _id: new ObjectId(id) });

  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const db = await connect();
  const result = await db
    .collection("tasks")
    .deleteOne({ _id: new ObjectId(id) });
  res.json({ message: `Task ${id} deleted` });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedTask = {
    title: req.body.title,
    description: req.body.description,
  };
  const db = await connect();
  const result = await db
    .collection("tasks")
    .updateOne({ _id: new ObjectId(id) }, { $set: updatedTask });
  res.json({
    message: `Task ${id} Updated`,
  });
});
export default router;
