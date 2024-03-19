CREATE TABLE IF NOT EXISTS Resource (
    id int,
    numLikes int,
    numComments int,
    ResourceTitle varchar(500),
    ResourceDesc varchar(500)
);

CREATE TABLE IF NOT EXISTS Users (
    id int,
    firstName varchar(100),
    lastName varchar(100),
    role varchar(100),
    email varchar(200),
    username varchar(100),
    password varchar(100)
);