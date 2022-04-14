import jwt from "jsonwebtoken";

export const jwtSign = (data: any) => {
  return jwtSignHelper(data, process.env.JWT_SIGN_KEY!);
};

const jwtSignHelper = (data: any, token: string) => {
  return jwt.sign(data, token);
};

export const jwtVerify = (token: string) => {
  return jwt.verify(token, process.env.JWT_SIGN_KEY!);
};
