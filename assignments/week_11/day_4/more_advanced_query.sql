--Exercise 1: Aggregation with GROUP BY
--Write a query to find the average price of books in each genre.
select title, genre, avg(price) as average_price_of_books from books
group by genre, title

--Exercise 2: Filtering with HAVING
--Write a query to find all authors who have written more than one book.


--Exercise 3: Sorting Results
--Retrieve all books and sort them alphabetically by title.

select * from books
order by title asc

--Exercise 4: Combining Clauses
--Write a query to retrieve the top 2 genres by total sales, with total sales • greater than 50.