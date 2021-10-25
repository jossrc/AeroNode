DROP DATABASE IF EXISTS db_aeronode;
CREATE DATABASE db_aeronode;
USE db_aeronode;

CREATE TABLE flights(
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `initialDestination` VARCHAR(150) NOT NULL,
  `finalDestination` VARCHAR(150) NOT NULL,
  `dayOfExit` DATE NOT NULL,
  `departureTime` TIME NOT NULL,
  `dayOfArrival` DATE NULL,
  `arrivalTime` TIME NULL,
  `plane` VARCHAR(150) NOT NULL,
  `seatsNumber` INT NOT NULL,
  `status` VARCHAR(100) NOT NULL DEFAULT 'EN ESPERA'
);

select * from flights;
