CREATE TABLE IF NOT EXISTS Resource (
    id int,
    resourceName varchar(500),
    topic varchar(500),
    resourceDesc varchar(500),
    audience varchar(500),
    resourceType varchar(500),
    resourceLink varchar(500),
    CTSA varchar(500),
    gradeLevel varchar(500),
    imageLink varchar(500),
    uploadDate varchar(500),
    module varchar(500),
    numLikes int,
    numComments int
);

CREATE TABLE IF NOT EXISTS User1 (
    id int,
    firstName varchar(100),
    lastName varchar(100),
    role varchar(100),
    email varchar(200),
    username varchar(100),
    password varchar(100)
);