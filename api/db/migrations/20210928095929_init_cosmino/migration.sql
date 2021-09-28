-- CreateTable
CREATE TABLE `lack5_export` (
    `sid` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `datum` DATETIME(0) NOT NULL,
    `uhrzeit` TIME(0) NOT NULL,
    `artikelcode` VARCHAR(13),
    `artikelbezeichnung` VARCHAR(50) NOT NULL DEFAULT '',
    `farbton` VARCHAR(25) DEFAULT '',
    `skidseite` TINYINT UNSIGNED DEFAULT 0,
    `lackierposition` SMALLINT UNSIGNED DEFAULT 0,
    `io_notouch` SMALLINT,
    `io_poliert` SMALLINT,
    `nacharbeit` SMALLINT,
    `ausschuss` SMALLINT,
    `fehlerart_code` SMALLINT UNSIGNED,
    `fehlerort_code` VARCHAR(5),
    `personalnummer` VARCHAR(60),
    `skid` INTEGER UNSIGNED DEFAULT 0,
    `barcode` VARCHAR(20),
    `artikelart` VARCHAR(20),
    `auslaufzeit` DATETIME(0),
    `Fahrweg` INTEGER,

    INDEX `barcode_index`(`barcode`),
    INDEX `datum_index`(`datum`),
    INDEX `fahrweg_datum`(`Fahrweg`, `datum`),
    PRIMARY KEY (`sid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lack5_fehlerart` (
    `fehlerart_code` SMALLINT UNSIGNED NOT NULL DEFAULT 0,
    `fehlerart_text` VARCHAR(40) NOT NULL DEFAULT '',

    PRIMARY KEY (`fehlerart_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lack5_fehlerort` (
    `fehlerort_code` VARCHAR(5) NOT NULL,
    `fehlerort_text` VARCHAR(40),

    PRIMARY KEY (`fehlerort_code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
