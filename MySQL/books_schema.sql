INSERT INTO favorites (author_id, book_id)
VALUES
("23", "2");

SELECT * FROM books;

UPDATE authors SET
last_name = "TZU" 
WHERE id = 23;

DELETE FROM favorites
WHERE author_id = 1 AND book_id = 3;

INSERT INTO favorites (author_id, book_id)
VALUES
("23", "2");

SELECT authors.first_name
FROM authors
JOIN favorites ON authors.id = favorites.author_id
WHERE favorites.book_id = 5;