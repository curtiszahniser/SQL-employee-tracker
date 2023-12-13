INSERT INTO department (id, department_name)
VALUES (001, "Accounting"),
       (002, "Marketing"),
       (003, "Sales"),
       (004, "Production"),
       (005, "Maintenance");

       INSERT INTO role (id, title, salary, department_id)
VALUES (001, "Associate", 20.00 ,001),
       (002, "Assistant Manager",21.00, 002),
       (003, "General Manager", 30.00, 003),
       (004, "Executive", 50.00, 004),
       (005, "Big Boss Man", 10000.00, 005);
       
       INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, "Jefferson", "Schlefferson", 001, 002),
       (002, "Billy", "Willy", 002, 003),
       (003, "Blanche", "Asparagus", 003, 003),
       (004, "Gene", "John", 004, 005),
       (005, "Rich","Mitch", 005,005);