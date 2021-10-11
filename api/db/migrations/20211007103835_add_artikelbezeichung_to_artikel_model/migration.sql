-- AlterTable
ALTER TABLE `artikel` ADD COLUMN `artikelbezeichnung` VARCHAR(50) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `lack5_export` ALTER COLUMN `auslaufzeit` DROP DEFAULT;

-- DropTrigger
DROP TRIGGER check_artikelcode;

-- CreateTrigger
CREATE TRIGGER check_artikelcode BEFORE
INSERT
  ON lack5_export FOR EACH ROW BEGIN IF (
    SELECT
      COUNT(*)
    FROM
      Artikel
    WHERE
      artikelcode = new.artikelcode
  ) = 0 THEN
INSERT INTO
  Artikel (artikelcode, artikelbezeichnung)
VALUES
  (new.artikelcode, new.artikelbezeichnung);
END IF;

END;

-- DataMigration
-- https://www.sqlshack.com/how-to-update-from-a-select-statement-in-sql-server/
UPDATE Artikel SET Artikel.artikelbezeichnung = (
  SELECT DISTINCT lack5_export.artikelbezeichnung
  FROM lack5_export
  WHERE lack5_export.artikelcode = Artikel.artikelcode
);
