-- Find the item that has minimum weight.
SELECT MIN(WEIGHT)
FROM ITEMS;

-- Find the different warehouses in “Pune”.
SELECT DISTINCT WNAME
FROM WAREHOUSES
WHERE LOCATION='Pune';


-- Find the details of items ordered by a customer “Mr. Patil”.
SELECT
    ITEMS.ITEMNO, ITEMS.DESCRIPTION, ITEMS.WEIGHT, ITEMS.COST
FROM ITEMS
    JOIN ITEMS_ORDERS
    ON ITEMS.ITEMNO = ITEMS_ORDERS.ITEMNO
    JOIN ORDERS
    ON ORDERS.ONO = ITEMS_ORDERS.ONO
    JOIN CUSTOMER
    ON CUSTOMER.CNO = ORDERS.CUSTOMER_ID
WHERE CUSTOMER.CNAME = 'Mr. Patil'


-- Find a Warehouse which has maximum stores.
SELECT TOP 1
    WH.id,
    COUNT(ST.SID) AS count
FROM WAREHOUSES WH
    LEFT JOIN
    STORES ST
    ON (ST.WAREHOUSE_ID = WH.id)
GROUP BY
    WH.id
order by count(ST.SID) desc;

-- Find an item which is ordered for a minimum number of times.
SELECT TOP 1
    ITEMNO, COUNT(ITEMNO) AS count
FROM ITEMS_ORDERS
GROUP BY ITEMNO
order by count(ITEMNO) asc

-- Find the detailed orders given by each customer
SELECT CUSTOMER.CNAME, ORDERS.ODATE, ITEMS.DESCRIPTION
FROM CUSTOMER
    join ORDERS
    on CUSTOMER.CNO=ORDERS.CUSTOMER_ID
    join ITEMS_ORDERS
    on ITEMS_ORDERS.ONO = ORDERS.ONO
    join ITEMS
    on ITEMS_ORDERS.ITEMNO=ITEMS.ITEMNO
order by CNAME;
