/*
  Warnings:

  - You are about to alter the column `lackierposition` on the `lack5_export` table. The data in that column could be lost. The data in that column will be cast from `UnsignedSmallInt` to `VarChar(5)`.

*/
-- AlterTable
ALTER TABLE `lack5_export` MODIFY `lackierposition` VARCHAR(5) NULL;
