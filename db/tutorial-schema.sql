CREATE DATABASE tutorial;

USE tutorial;

CREATE TABLE users (
	id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(20),
	last_name VARCHAR(20),
	age INT(3)
);