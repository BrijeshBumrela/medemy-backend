import crypto from "crypto";

export const hashKey = (key: string) => {
  return hashKeyHelper(key, process.env.HASH_SALT!);
};

const hashKeyHelper = (key: string, salt: string) => {
  return crypto.pbkdf2Sync(key, salt, 1000, 64, "sha512").toString("hex");
};
