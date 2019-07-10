DROP DATABASE IF EXISTS krustyburger_db;

CREATE DATABASE krustyburger_db;

USE krustyburger_db;

CREATE TABLE menu(
    id int NOT NULL AUTO_INCREMENT,
    selection varchar(500) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO menu (selection) 
VALUES ('Mother Nature Burger');
INSERT INTO menu (selection) 
VALUES ('Krusty Burger');
INSERT INTO menu (selection) 
VALUES ('Double Krusty Burger'); 
INSERT INTO menu (selection)
VALUES ('Double Double Double Double');
INSERT INTO menu (selection)
VALUES ('Meat-Flavored Sandwich');
INSERT INTO menu (selection)
VALUES ('The Clogger');
INSERT INTO menu (selection)
VALUES ('Ribwich');
INSERT INTO menu (selection)
VALUES ('Filly Fudge Steak');
INSERT INTO menu (selection)
VALUES ('Bacon Balls');
INSERT INTO menu (selection)
VALUES ('Whatchamachicken');
INSERT INTO menu (selection)
VALUES ('Fish Sandwich');
INSERT INTO menu (selection)
VALUES ('Krusty-Partially-Gelatinated-Non-Dairy-Gum-Based-Beverage');
INSERT INTO menu (selection)
VALUES ('Krusty Popcorn');
INSERT INTO menu (selection) 
VALUES ('Frosted Krusty Flakes');
INSERT INTO menu (selection) 
VALUES ('Whattchamacarcass Sandwich');
INSERT INTO menu (selection)
VALUES ('Breakfast Balls');
INSERT INTO menu (selection)
VALUES ('Gravy Scrapems');
INSERT INTO menu (selection)
VALUES ('Twisty Lard');
INSERT INTO menu (selection)
VALUES ('Super-Choker Burritos with Macho Sauce');


