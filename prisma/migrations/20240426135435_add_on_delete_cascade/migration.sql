-- DropForeignKey
ALTER TABLE "input" DROP CONSTRAINT "input_laboratoryId_fkey";

-- AddForeignKey
ALTER TABLE "input" ADD CONSTRAINT "input_laboratoryId_fkey" FOREIGN KEY ("laboratoryId") REFERENCES "laboratory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
