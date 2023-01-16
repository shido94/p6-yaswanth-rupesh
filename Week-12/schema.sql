/** Sql create and constraint query */

create table CITIES(
	id int primary key auto_increment not null,
    CITY varchar
(20),
    state varchar
(20)
);

create table WAREHOUSES(
	id int primary key auto_increment not null,
    WID int,
    WNAME varchar
(30),
    LOCATION varchar
(20) ,
    CITY_ID int ,
    FOREIGN KEY
(CITY_ID) REFERENCES CITIES
(id)
);

create table STORES(
	SID int primary key auto_increment not null,
    STORE_NAME varchar
(20),
    LOCATION_CITY varchar
(20),
    WAREHOUSE_ID int ,
    FOREIGN KEY
(WAREHOUSE_ID) REFERENCES WAREHOUSES
(id)
);

create table CUSTOMER(
	CNO int primary key auto_increment not null,
    CNAME varchar
(50),
    ADDR varchar
(50),
    CU_CITY varchar
(20)
);

create table ORDERS(
	ONO int primary key auto_increment not null,
    ODATE date,
	CUSTOMER_ID int ,
    FOREIGN KEY
(CUSTOMER_ID) REFERENCES CUSTOMER
(CNO)
);


create table ITEMS(
	ITEMNO int primary key auto_increment not null,
    DESCRIPTION text,
    WEIGHT decimal
(5,2),
    COST decimal
(5,2)
);

create table ITEMS_ORDERS
(
    ITEMNO int REFERENCES ITEMS(ITEMNO),
    ONO int REFERENCES ORDERS(ONO),
    PRIMARY KEY (ITEMNO, ONO)
);


create table STORES_ITEMS
(
    SID int REFERENCES STORES(SID),
    ITEMNO int REFERENCES ITEMS(ITEMNO),
    PRIMARY KEY (SID, ITEMNO)
);

