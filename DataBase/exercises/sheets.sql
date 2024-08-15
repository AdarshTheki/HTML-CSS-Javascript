-- C: / program file / mysql server 8.0 / bin -> folder to terminal use  
-- mysql -u root -p
-- \! clear  or \! clr
-- \! ls
-- SHOW DATABASES;

CREATE DATABASE database_name;

USE database_name;

CREATE TABLE table_name (
  id INT unsigned,
  name VARCHAR (100),
  email VARCHAR (150),
  password VARCHAR (100),
  contact VARCHAR (15),
  address TEXT,
  DOB DATE,
  gender ENUM("M", "F", "O"),
  status BOOLEAN
);

-- INSERT tables
INSERT INTO 
  table_name ( id, name, email, password, contact, address, DOB, gender, status )
VALUES
(001,"Adarsh","adarsh@gmail.com","Adarsh@12","1222564674","MH,Nagpur","1998-06-10","M", 1 );

-- SELECT TABLE:
SELECT col1, col2, ... from database_name;    -- particular column
SELECT * from database_name;                  -- all column select
SELECT col1 as column_one from database_name; -- column name change

-- WHERE Clauses: (Filter Data with OPERATORS)
-- Arithmetic, Bitwise, Comparison, Compound(+=, -= ...)
-- IN, AND, OR, NOT, ALL, ANY, BETWEEN, EXISTS, LIKE, SOME 
SELECT * FROM student WHERE age > 20;
SELECT * FROM student WHERE age <="20" AND age >="15";  -- AND, OR and NOT
SELECT * FROM student WHERE age IN (20, 18, 16, 25);     -- IN is all use value

-- LIKE: (wildcard - SEARCH) (%) zero, one or multiple value   (_) single value
SELECT * FROM student WHERE name LIKE "%d_r%";

-- BETWEEN AND: (range)
SELECT * FROM table_name WHERE name BETWEEN 'Adarsh' AND 'Ayush';

-- ORDER BY (asc/desc)
-- DISTINCT(unique)
SELECT * FROM table_name ORDER BY age DESC;
SELECT DISTINCT age FROM table_name ORDER BY age ASC;

-- IS NULL / IS NOT NULL:
SELECT * FROM table_name WHERE gender IS NULL;

-- LIMIT:(limit Data), OFFSET:(how to start Data)
SELECT * FROM table_name LIMIT 10 OFFSET 0;

/* Aggregate Functions in MySQL:-
COUNT() SUM() AVG() MIN() MAX()   */
SELECT COUNT(col_name) FROM table_name;
SELECT SUM(col_name) as uniqueId FROM table_name;

-- UPDATE query:-(WHERE clause use id)
UPDATE table_name SET name = "Adarsh" WHERE id = 11;

-- DELETE query:(WHERE clause use id)
DELETE FROM student WHERE id = 4;
DELETE FROM student WHERE id IN (10, 15);

-- COMMIT and ROLLBACK:-
COMMIT;
ROLLBACK;

-- Primary and Secondary :-
-- First Main Table of Student 
CREATE TABLE student (
  id INT NOT NULL,
  name VARCHAR(100) NOT NULL, 
  email VARCHAR(120) NOT NULL, 
  primary key(id)                               -- primary key
);
insert into student (id, name, email) values (01, "Adarsh", "adarsh@gmail.com");

-- foreign key refer to first table primary key
CREATE TABLE candidate (
  id INT NOT NULL,
  lastName VARCHAR(100) NOT NULL, 
  stud_id int null, 
  primary key(id),
  foreign key(stud_id) references student(id)   -- foreign key
)
insert into candidate (id, lastName, stud_id) values (101, "Verma", 1);
