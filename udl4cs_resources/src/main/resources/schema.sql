CREATE TABLE IF NOT EXISTS Resource (
    id int NOT NULL PRIMARY KEY AUTOINCREMENT,
    resourceName varchar(500),
    topic varchar(500),
    resourceDesc varchar(1000),
    audience varchar(500),
    resourceType varchar(500),
    resourceLink varchar(500),
    CSTA varchar(500),
    gradeLevel varchar(500),
    imageLink varchar(500),
    uploadDate varchar(500),
    module varchar(500),
    numLikes int DEFAULT 0,
    numComments int DEFAULT 0
);

CREATE TABLE IF NOT EXISTS User1 (
    id int NOT NULL PRIMARY KEY AUTOINCREMENT,
    firstName varchar(100),
    lastName varchar(100),
    role varchar(100),
    email varchar(200),
    username varchar(100),
    password varchar(100)
);

CREATE TABLE IF NOT EXISTS Comment (
    id int NOT NULL PRIMARY KEY AUTOINCREMENT,
    firstName varchar(100),
    lastName varchar(100),
    comment varchar(100),
    username varchar(100),
    uploaddate varchar(200)
);