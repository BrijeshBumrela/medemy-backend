import express from "express";
import prisma from "./prisma";

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
