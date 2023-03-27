CREATE TABLE Reels(
    id PRIMARY KEY INT NOT NULL,
    title VARCHAR(255),
    author_id INT NOT NULL,
    discription Text,
    videoURL Text,
    likes INT,
    FOREIGN KEY ("author_id") REFERENCES Users(id)
);