-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "imageUrl" TEXT,
    "password" TEXT NOT NULL,
    "passwordToken" TEXT,
    "passwordExpiresDate" TIMESTAMP(3),
    "role" "Role" NOT NULL DEFAULT 'USER',
    "teacher" TEXT,
    "student" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "laboratory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "accessCode" TEXT NOT NULL,
    "institution" TEXT NOT NULL,
    "teacherId" TEXT,
    "studentId" TEXT,

    CONSTRAINT "laboratory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "input" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "observations" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "categories" TEXT NOT NULL,
    "subCategories" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "laboratoryId" TEXT NOT NULL,

    CONSTRAINT "input_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "user_passwordToken_key" ON "user"("passwordToken");

-- CreateIndex
CREATE UNIQUE INDEX "laboratory_accessCode_key" ON "laboratory"("accessCode");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_teacher_fkey" FOREIGN KEY ("teacher") REFERENCES "laboratory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_student_fkey" FOREIGN KEY ("student") REFERENCES "laboratory"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "input" ADD CONSTRAINT "input_laboratoryId_fkey" FOREIGN KEY ("laboratoryId") REFERENCES "laboratory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
