import { createUserInput } from "../schemas/user.schema";
import prisma from "../utils/prisma";
export async function createUser(user: createUserInput) {
  return prisma.user.create({
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
    },
  });
}

export async function getUser(id: string) {
  console.log(id);
  try {
    return prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        boards: true,
        Tabel: true,
        tasks: true,
      },
    });
  } catch (error) {}
}

export async function findUserByEmail(email: string) {
  return prisma.user.findFirst({
    where: {
      email,
    },
  });
}

export async function deleteUser(id: string) {}
