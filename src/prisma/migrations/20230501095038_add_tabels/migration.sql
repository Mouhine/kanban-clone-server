-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "tabelId" TEXT;

-- CreateTable
CREATE TABLE "Tabel" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tabel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_tabelId_fkey" FOREIGN KEY ("tabelId") REFERENCES "Tabel"("id") ON DELETE SET NULL ON UPDATE CASCADE;
