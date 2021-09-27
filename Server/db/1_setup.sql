DROP TABLE IF EXISTS "items";

CREATE TABLE "items" (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    price float NOT NULL,
    stock_left int NOT NULL
);