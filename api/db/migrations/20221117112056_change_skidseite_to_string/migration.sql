/*
  Warnings:

  - You are about to alter the column `skidseite` on the `lack5_export` table. The data in that column could be lost. The data in that column will be cast from `UnsignedTinyInt` to `VarChar(1)`.

*/
-- AlterTable
ALTER TABLE `lack5_export` MODIFY `skidseite` VARCHAR(1) NULL;
