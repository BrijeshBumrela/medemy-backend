import { NextFunction, Request, Response } from "express";
import { getUserById } from "../repository/user";
import { jwtVerify } from "../utils/jwt";

export const getLoggedInUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorizationHeader = req.headers.authorization;
  if (!authorizationHeader) {
    return next();
  }

  const response = jwtVerify(authorizationHeader);

  if (!response || typeof response === "string") {
    return next();
  }

  const { id } = response;

  const user = await getUserById(id);

  if (!user) {
    return next();
  }

  req.user = user;
  return next();
};
