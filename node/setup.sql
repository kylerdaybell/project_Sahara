DROP DATABASE sahara;
create database sahara;
USE sahara;
CREATE TABLE USER(
    ID int NOT NULL AUTO_INCREMENT,
    EMAIL varchar(255) NOT NULL,
    PASSWORD varchar(255) NOT NULL,
    ROLE varchar(255) NOT NULL, 
    PRIMARY KEY (ID)
);