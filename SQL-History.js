CREATE TABLE Person ( 
  ID INTEGER PRIMARY KEY AUTOINCREMENT, 
  Name varchar(250), 
  Age integer, 
  Height integer, 
  City varchar(250), 
  FavoriteColor varchar(250)
);

INSERT INTO Person (Name, Age, Height, City, FavoriteColor) 
VALUES ("Michael Kovich", 25, 185, "Dallas", "blue");

INSERT INTO Person (Name, Age, Height, City, FavoriteColor) 
VALUES ("Takeshi Kovacs", 27, 185, "Tokyo", "gray");

INSERT INTO Person (Name, Age, Height, City, FavoriteColor) 
VALUES ("JFK", 52, 175, "Dallas", "red");

INSERT INTO Person (Name, Age, Height, City, FavoriteColor) 
VALUES ("Motoko Kusanagi", 32, 156, "Tokyo", "purple");

INSERT INTO Person (Name, Age, Height, City, FavoriteColor) 
VALUES ("Bobby Tables", 7, 160, "Los Angeles", "red");

SELECT * FROM Person ORDER BY Height DESC;
SELECT * FROM Person ORDER BY Height ASC;

SELECT * FROM Person ORDER BY Age DESC;
SELECT * FROM Person WHERE Age > 20;
SELECT * FROM Person WHERE Age = 18;
SELECT * FROM Person WHERE Age < 20 OR Age > 30;
SELECT * FROM Person WHERE Age IS NOT 27;

SELECT * FROM Person WHERE FavoriteColor IS NOT "red";
SELECT * FROM Person WHERE FavoriteColor IS NOT "red" AND FavoriteColor IS NOT "blue";
SELECT * FROM Person WHERE FavoriteColor IS "orange" OR FavoriteColor IS "green";
SELECT * FROM Person WHERE FavoriteColor IN ("orange", "green", "blue");
SELECT * FROM Person WHERE FavoriteColor IN ("yellow", "purple");

CREATE TABLE Orders (
  PersonID integer primary key autoincrement, 
  ProductName varchar(250), 
  ProductPrice float, 
  Quantity integer
);

INSERT INTO Orders (ProductName, ProductPrice, Quantity) 
VALUES ("Product", 12.50, 2);

SELECT * FROM Orders;
SELECT SUM(Quantity) FROM Orders;
SELECT SUM(ProductPrice * Quantity) FROM Orders;
SELECT SUM(ProductPrice * Quantity) FROM Orders WHERE PersonID = 1;

INSERT INTO Artist (Name)
VALUES ('Michael'), ('Ralph Wiggum'), ('Chris Christie');

SELECT * FROM Artist ORDER BY Name DESC LIMIT 10;
SELECT * FROM Artist ORDER BY Name ASC LIMIT 5;
SELECT * FROM Artist WHERE Name LIKE 'Black%';
SELECT * FROM Artist WHERE Name LIKE '%Black%';

SELECT FirstName, LastName FROM Employee WHERE City = "Calgary";
SELECT FirstName, LastName, Max(BirthDate) FROM Employee;
SELECT FirstName, LastName, Min(BirthDate) FROM Employee;

SELECT * FROM Employee WHERE ReportsTo = 2;
SELECT COUNT(*) FROM Employee WHERE City = "Lethbridge";

SELECT COUNT(*) FROM Invoice WHERE BillingCountry like "USA";
SELECT Max(Total) FROM Invoice;
SELECT Min(Total) FROM Invoice;

SELECT * FROM Invoice WHERE Total > 5;
SELECT Count(*) FROM Invoice WHERE Total < 5;
SELECT Count(*) FROM Invoice WHERE BillingState in ('CA', 'TX', 'AZ');

SELECT AVG(Total) FROM Invoice;
SELECT Round(AVG(Total), 2) FROM Invoice;
SELECT Round(AVG(Total), 2) FROM Invoice;