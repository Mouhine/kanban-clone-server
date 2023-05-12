-- AlterTable
ALTER TABLE "Tabel" ADD COLUMN     "boardId" TEXT;

-- AddForeignKey
ALTER TABLE "Tabel" ADD CONSTRAINT "Tabel_boardId_fkey" FOREIGN KEY ("boardId") REFERENCES "Board"("id") ON DELETE SET NULL ON UPDATE CASCADE;
