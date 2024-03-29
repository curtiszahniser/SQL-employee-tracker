DROP DATABASE IF EXISTS empTracker_db;
CREATE DATABASE empTracker_db;

USE empTracker_db;

CREATE TABLE department (
    id INT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT
);

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30)NOT NULL,
    last_name VARCHAR(30)NOT NULL,
    role_id INT,
    manager_id INT 
);