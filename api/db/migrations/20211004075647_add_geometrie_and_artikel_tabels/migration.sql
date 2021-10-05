-- CreateTable
CREATE TABLE `Geometrie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Bezeichnung` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Artikel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `artikelcode` VARCHAR(13) NOT NULL,
    `GeometieId` INTEGER,

    UNIQUE INDEX `Artikel.artikelcode_unique`(`artikelcode`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `lack5_export` ADD FOREIGN KEY (`fehlerart_code`) REFERENCES `lack5_fehlerart`(`fehlerart_code`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lack5_export` ADD FOREIGN KEY (`artikelcode`) REFERENCES `Artikel`(`artikelcode`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Artikel` ADD FOREIGN KEY (`GeometieId`) REFERENCES `Geometrie`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
