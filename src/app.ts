import express from "express";
import { authRoutes, courseRoutes } from "./routes";

const app = express();
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/course", courseRoutes);

export default app;
