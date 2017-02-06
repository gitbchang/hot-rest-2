CREATE database hotrestaurant_db;
USE hotrestaurant_db;

CREATE TABLE allTables (
   table_id INT NOT NULL AUTO_INCREMENT primary key,
   reserve_name VARCHAR(100) NOT NULL,
   reserve_id INT(10) NOT NULL,
   available BOOLEAN not null default 1,
   email VARCHAR(100) NOT NULL,
   phone INT(15) NOT NULL   
);

CREATE TABLE waiting_list(
	wait_id int primary key,
    reservation_name VARCHAR(100) NOT NULL,
    reservation_id INT(10) NOT NULL,
    email VARCHAR(100) NOT NULL,
   phone INT(15) NOT NULL   
);
