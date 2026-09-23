CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL
);

INSERT INTO users (name, email) VALUES
    ('Ivan', 'ivan@gmail.com'),
    ('Stepan', 'stepan@gmail.com'),
    ('Petro', 'petro@ukr.net');
