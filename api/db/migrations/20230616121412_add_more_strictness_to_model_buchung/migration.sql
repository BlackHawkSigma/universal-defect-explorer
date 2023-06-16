/*
  Warnings:

  - Made the column `artikelcode` on table `lack5_export` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `lack5_export` DROP FOREIGN KEY `lack5_export_artikelcode_fkey`;

-- AlterTable
ALTER TABLE `lack5_export` MODIFY `artikelcode` VARCHAR(13) NOT NULL,
    ALTER COLUMN `artikelbezeichnung` DROP DEFAULT,
    ALTER COLUMN `skid` DROP DEFAULT;

-- AddForeignKey
ALTER TABLE `lack5_export` ADD CONSTRAINT `lack5_export_artikelcode_fkey` FOREIGN KEY (`artikelcode`) REFERENCES `Artikel`(`artikelcode`) ON DELETE RESTRICT ON UPDATE CASCADE;
