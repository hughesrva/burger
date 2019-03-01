use ew8ku8gudvlkwicc;

create table burgers(
id INT AUTO_INCREMENT NOT NULL,
burger_name varchar (10) not null,
devoured boolean default false,
createdAt TIMESTAMP NOT NULL default current_timestamp,
primary key (id)
);