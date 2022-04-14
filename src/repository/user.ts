import prisma from "../prisma";

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });
};

export const getUserByEmailAndPassword = async (
  email: string,
  password?: string
) => {
  return await prisma.user.findFirst({
    where: {
      email,
      password,
    },
  });
};

export const addUser = async ({
  email,
  password,
  first_name,
  last_name,
}: {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
}) => {
  const user = await prisma.user.create({
    data: {
      first_name,
      last_name,
      email,
      password,
    },
  });

  return user;
};
