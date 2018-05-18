create table User(
id int not null primary key,
first_name varchar(255),
last_name varchar(255)
);

CREATE SEQUENCE PUBLIC.SEQ_USER START WITH 100;