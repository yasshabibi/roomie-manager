CREATE database roomie_manager;

USE roomie_manager

CREATE TABLE IF NOT EXISTS Users (
    id INT NOT NULL PRIMARY KEY  AUTO_INCREMENT,
    lastname VARCHAR(25) NOT NULL,
    firstname VARCHAR(25) NOT NULL,
    rank INT NOT NULL,
    password VARCHAR(25) NOT NULL,
);

CREATE TABLE IF NOT EXISTS Room (
    id INT NOT NULL PRIMARY KEY  AUTO_INCREMENT,
    name VARCHAR(25) NOT NULL,
    capacity INT NOT NULL,
);

CREATE TABLE IF NOT EXISTS User_in_room (
    id INT NOT NULL PRIMARY KEY  AUTO_INCREMENT,
    room_id INT NOT NULL,
    user_id INT NOT NULL,
);

CREATE TABLE IF NOT EXISTS Spent (
    id INT NOT NULL PRIMARY KEY  AUTO_INCREMENT,
    user_id INT NOT NULL,
    room_id INT NOT NULL,
    money_spent INT NOT NULL,
    commentary VARCHAR(25),
)