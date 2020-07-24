CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(50) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);

CREATE TABLE burgers_db (
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(100),
  createdAt TIMESTAMP NOT NULL,
  PRIMARY KEY(id)
);