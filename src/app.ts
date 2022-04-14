import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  const user = await prisma.user.findMany({
    include: {
      educator: true,
    },
  });
  return res.json(user);
});

export default app;
