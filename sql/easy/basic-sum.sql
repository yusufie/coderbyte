-- Coderbyte Challenge: Basic Sum
-- Difficulty: Easy

-- Your table: maintable_KPZTV
-- MySQL version: 8.0.23

-- In this MySQL challenge, your query should return LastName and the sum of Age from your table for all users with a LastName = Smith. The column title of the summed ages should be SumAge. Your output should look like the following table.

-- +----+----------+----------+
-- | LastName | SumAge |
-- +----+----------+----------+
-- | Smith    |  47    |
-- +----+----------+----------+

/* write your SQL query below */
SELECT LastName, SUM(Age) AS SumAge FROM maintable_KPZTV WHERE LastName = 'Smith' GROUP BY LastName;