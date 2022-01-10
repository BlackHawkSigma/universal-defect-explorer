/*
  Warnings:

  - You are about to drop the column `gridId` on the `geometrie` table. All the data in the column will be lost.
  - You are about to drop the `grid` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `artikel` DROP FOREIGN KEY `artikel_ibfk_1`;

-- DropForeignKey
ALTER TABLE `geometrie` DROP FOREIGN KEY `geometrie_ibfk_1`;

-- DropForeignKey
ALTER TABLE `lack5_export` DROP FOREIGN KEY `lack5_export_ibfk_2`;

-- DropForeignKey
ALTER TABLE `lack5_export` DROP FOREIGN KEY `lack5_export_ibfk_1`;

-- AlterTable
ALTER TABLE `geometrie` DROP COLUMN `gridId`,
    ADD COLUMN `columns` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `image` LONGTEXT NOT NULL,
    ADD COLUMN `pixels` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `rows` INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE `grid`;

-- AddForeignKey
ALTER TABLE `lack5_export` ADD CONSTRAINT `lack5_export_fehlerart_code_fkey` FOREIGN KEY (`fehlerart_code`) REFERENCES `lack5_fehlerart`(`fehlerart_code`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lack5_export` ADD CONSTRAINT `lack5_export_artikelcode_fkey` FOREIGN KEY (`artikelcode`) REFERENCES `Artikel`(`artikelcode`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Artikel` ADD CONSTRAINT `Artikel_GeometieId_fkey` FOREIGN KEY (`GeometieId`) REFERENCES `Geometrie`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- RenameIndex
ALTER TABLE `artikel` RENAME INDEX `Artikel.artikelcode_unique` TO `Artikel_artikelcode_key`;
