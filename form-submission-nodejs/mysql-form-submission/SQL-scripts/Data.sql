create table kingdb_table (user_id int auto_increment,
first_name varchar(70),
last_name varchar(70),
user_age int,
user_password varchar(550),
user_country varchar(150),
user_alive varchar(150),
user_occupation varchar(150),
primary key(user_id));

describe kingdb_table;
select * from kingdb_table;
drop table kingdb_table;