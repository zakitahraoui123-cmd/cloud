create table user_info(
id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
last_name TEXT NOT NULL,
phone TEXT NOT NULL,
password TEXT NOT NULL,
avatar TEXT,
email TEXT NOT NULL
);
create table user_data(
id SERIAL PRIMARY KEY,
user_info_id INT REFERENCES user_info(id),
pictures_path TEXT NOT NULL ,
picture_size numeric(10,2) NOT NULL
);
create table cloud_storage(
id SERIAL PRIMARY KEY ,
user_cloud_id INT REFERENCES user_info(id),
storage numeric(10,2) DEFAULT 0
);