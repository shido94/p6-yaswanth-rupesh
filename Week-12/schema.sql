-- show tables; 

create table CITIES(
	id int primary key auto_increment not null,
    CITY varchar(20),
    state varchar(20)
);

create table WAREHOUSES(
	id int primary key auto_increment not null,
    WID int,
    WNAME varchar(30),
    LOCATION varchar(20)
);

create table STORES(
	SID int primary key auto_increment not null,
    STORE_NAME varchar(20),
    LOCATION_CITY varchar(20)
);

create table CUSTOMER(
	CNO int primary key auto_increment not null,
    CNAME varchar(50),
    ADDR varchar(50),
    CU_CITY varchar(20)
);

create table ORDERS(
	ONO int primary key auto_increment not null,
    ODATE date
);

create table ITEMS(
	ITEMNO int primary key auto_increment not null,
    DESCRIPTION text,
    WEIGHT decimal(5,2),
    COST decimal(5,2)
);


