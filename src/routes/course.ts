import express, { Request, Response } from "express";
import { getCourseBySlug } from "../services/course";

const router = express.Router();

router.get(":slug", async (req: Request, res: Response) => {
  const slug = req.params["slug"];
  return getCourseBySlug(slug);
});

export default router;
