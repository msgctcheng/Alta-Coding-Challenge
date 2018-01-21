DROP DATABASE IF EXISTS locations_db;
CREATE DATABASE locations_db;

USE locations_db;

CREATE TABLE spots (
    id INT NOT NULL AUTO_INCREMENT,
    home BOOLEAN NOT NULL DEFAULT 0,
    street VARCHAR(150) NOT NULL,
    city VARCHAR(25) DEFAULT "Los Angeles",
    distance VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
    
);