CREATE DATABASE burgers_db;
USE burgers_db;

create table burgers(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar (10) not null,
devoured boolean default false,
primary key (id)
);