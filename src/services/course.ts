import prisma from "../prisma";

export const getCourseBySlug = async (slug: string) => {
  return await prisma.course.findFirst({
    where: { slug },
  });
};
