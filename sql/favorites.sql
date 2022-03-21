CREATE DATABASE favorites_db;

USE favorites_db;
CREATE TABLE movies (
	title VARCHAR(50) NOT NULL,
    year INT NOT NULL
);

CREATE TABLE songs (
	title VARCHAR(50) NOT NULL,
    album VARCHAR(50) NOT NULL
);

CREATE TABLE foods (
	name VARCHAR(50) NOT NULL,
    cuisine VARCHAR(50) NOT NULL
);

CREATE TABLE games (
	name VARCHAR(50) NOT NULL,
    category VARCHAR(50) NOT NULL
);

USE favorites_db;
INSERT INTO movies (title, year)
VALUES ('movie1', 2022), ('movie2', 2022);

INSERT INTO songs (title, album)
VALUES ('song1', 'album1'), ('song2', 'album2');

INSERT INTO foods (name, cuisine)
VALUES ('food1', 'cuisine1'), ('food2', 'cuisine2');

INSERT INTO games (name, category)
VALUES ('game1', 'category1'), ('game2', 'category2');

USE favorites_db;
SELECT * FROM movies;

USE favorites_db;
SELECT * FROM songs;

USE favorites_db;
SELECT * FROM foods;

USE favorites_db;
SELECT * FROM games;

USE favorites_db;
UPDATE movies
SET year = 2023
WHERE title = 'movie2';

USE favorites_db;
UPDATE songs
SET album = 'album3'
WHERE title = 'song2';

USE favorites_db;
UPDATE foods
SET cuisine = 'cuisine3'
WHERE name = 'food2';

USE favorites_db;
UPDATE games
SET category = 'category3'
WHERE name = 'game2';

USE favorites_db;
DELETE FROM movies
WHERE title = 'movie2';

USE favorites_db;
DELETE from songs
WHERE title = 'song2';

USE favorites_db;
DELETE from foods
WHERE name = 'food2';

USE favorites_db;
DELETE from games
WHERE name = 'game2';
