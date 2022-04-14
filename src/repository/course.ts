import prisma from "../prisma";

export const getCourseById = async (id: number) => {
  return await prisma.course.findUnique({
    where: {
      id,
    },
  });
};
