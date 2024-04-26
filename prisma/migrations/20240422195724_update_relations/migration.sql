/*
  Warnings:

  - You are about to drop the column `student` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `teacher` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_student_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_teacher_fkey";

-- AlterTable
ALTER TABLE "user" DROP COLUMN "student",
DROP COLUMN "teacher";

-- CreateTable
CREATE TABLE "_TeacherLaboratory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_StudentLaboratory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_TeacherLaboratory_AB_unique" ON "_TeacherLaboratory"("A", "B");

-- CreateIndex
CREATE INDEX "_TeacherLaboratory_B_index" ON "_TeacherLaboratory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_StudentLaboratory_AB_unique" ON "_StudentLaboratory"("A", "B");

-- CreateIndex
CREATE INDEX "_StudentLaboratory_B_index" ON "_StudentLaboratory"("B");

-- AddForeignKey
ALTER TABLE "_TeacherLaboratory" ADD CONSTRAINT "_TeacherLaboratory_A_fkey" FOREIGN KEY ("A") REFERENCES "laboratory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_TeacherLaboratory" ADD CONSTRAINT "_TeacherLaboratory_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentLaboratory" ADD CONSTRAINT "_StudentLaboratory_A_fkey" FOREIGN KEY ("A") REFERENCES "laboratory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_StudentLaboratory" ADD CONSTRAINT "_StudentLaboratory_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
