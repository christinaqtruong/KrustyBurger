DROP DATABASE IF EXISTS krustyburger_db;

CREATE DATABASE krustyburger_db;

USE krustyburger_db;

CREATE TABLE menu(
    id int NOT NULL AUTO_INCREMENT,
    selection varchar(500) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);


