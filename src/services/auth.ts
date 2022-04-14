import { addUser, getUserByEmailAndPassword } from "../repository/user";
import { hashKey } from "../utils/hash";
import { jwtSign } from "../utils/jwt";

export const signup = async ({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) => {
  const oldUser = await getUserByEmailAndPassword(email);

  if (oldUser) {
    throw new Error("User already exists");
  }

  const names = name.split(" ");
  const first_name = names[0];
  const last_name = names[1];

  const hashedPassword = hashKey(password);
  const user = await addUser({
    email,
    password: hashedPassword,
    first_name,
    last_name,
  });
  return user;
};

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const hashedPassword = hashKey(password);
  const user = await getUserByEmailAndPassword(email, hashedPassword);

  if (!user) {
    throw new Error("User Not found");
  }

  const jwtToken = jwtSign({ email, id: user.id });
  return jwtToken;
};
