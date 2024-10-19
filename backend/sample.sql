CREATE DATABASE registration_system;

USE registration_system;

CREATE TABLE Registration (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  dob DATE NOT NULL
);

