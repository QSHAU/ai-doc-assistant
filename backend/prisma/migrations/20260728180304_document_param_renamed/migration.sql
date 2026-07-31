/*
  Warnings:

  - You are about to drop the column `filenameBd` on the `Document` table. All the data in the column will be lost.
  - Added the required column `storedName` to the `Document` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Document" DROP COLUMN "filenameBd",
ADD COLUMN     "storedName" TEXT NOT NULL;
