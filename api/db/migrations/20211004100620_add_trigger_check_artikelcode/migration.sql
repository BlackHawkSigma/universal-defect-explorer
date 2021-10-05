-- create trigger
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
  Artikel (artikelcode)
VALUES
  (new.artikelcode);

END IF;

END;
