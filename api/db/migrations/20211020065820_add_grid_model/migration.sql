-- AlterTable
ALTER TABLE `geometrie` ADD COLUMN `gridId` INTEGER,
    ADD COLUMN `partsPerSide` INTEGER NOT NULL DEFAULT 1,
    ADD COLUMN `scrapTaget` DECIMAL(3, 2) NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE `Grid` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imageUrl` VARCHAR(191) NOT NULL,
    `width` INTEGER NOT NULL,
    `height` INTEGER NOT NULL,
    `rows` INTEGER NOT NULL,
    `column` INTEGER NOT NULL,
    `pixels` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Geometrie` ADD FOREIGN KEY (`gridId`) REFERENCES `Grid`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
