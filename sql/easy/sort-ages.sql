-- Coderbyte Challenge: Sort Ages
-- Difficulty: Easy

-- Your table: maintable_IBMST
-- MySQL version: 8.0.23

-- In this MySQL challenge, your query should return the rows from your table where LastName = Smith or FirstName = Robert and the rows should be sorted by Age in ascending order. Your output should look like the following table.

-- +----+----------+----------+------+
-- | ID | FirstName | LastName | Age  |
-- +----+----------+----------+------+
-- |  2 | Mike   | Smith    |   22 |
-- |  4 | Robert | Black    |   22 |
-- |  1 | Daniel | Smith    |   25 |
-- +----+----------+----------+------+

/* write your SQL query below */
SELECT * FROM maintable_IBMST WHERE LastName = 'Smith' OR FirstName = 'Robert' ORDER BY Age ASC;