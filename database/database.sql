--Creating Database
CREATE DATABASE InlandChallenge;

--Creatint Table
CREATE TABLE places (
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    latitude FLOAT,
    longitude FLOAT
);

--Inserting Data
INSERT INTO places (name, latitude, longitude)
    VALUES ('Fresno City College', 36.76696, -119.79779 );

select * from places;