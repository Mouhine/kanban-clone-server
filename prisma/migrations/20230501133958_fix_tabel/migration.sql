/*
  Warnings:

  - Added the required column `userId` to the `Tabel` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tabel" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Tabel" ADD CONSTRAINT "Tabel_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
