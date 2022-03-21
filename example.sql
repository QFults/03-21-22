CREATE DATABASE dogs_db;

USE dogs_db;
CREATE TABLE dogs (
	name VARCHAR(25) NOT NULL,
    age INT NOT NULL,
    breed VARCHAR(30) NOT NULL
);

USE dogs_db;
INSERT INTO dogs (name, age, breed)
VALUES ('Bear', 6, 'Cockapoo'), ('Beef', 2, 'Chihuahua');

USE dogs_db;
SELECT * FROM dogs
WHERE name = 'Beef';

USE dogs_db;
UPDATE dogs
SET age = 3
WHERE name = 'Beef';

USE dogs_db;
DELETE FROM dogs
WHERE name = 'Bear';
