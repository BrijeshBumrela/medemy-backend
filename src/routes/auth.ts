import express, { Request, Response } from "express";
import { login, signup } from "../services/auth";

const router = express.Router();

router.post("/signup", async (req: Request, res: Response) => {
  const { email, password, name } = req.body;
  const user = await signup({ email, password, name });
  return res.json(user);
});

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await login({ email, password });
  return user;
});

export default router;
