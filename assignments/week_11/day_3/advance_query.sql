--Exercise 1: Using INNER JOIN
--Write a query to retrieve all sales data, including the book titles and the quantity sold.

select s.sale_date, s.quantity, b.title
from sales s
inner join
books b
on s.book_id = b.id

--Exercise 2: Using LEFT JOIN
--Write a query to retrieve all authors and their books. Include authors who haven’t written any books.

select a.name, b.title
from
authors a
left join
books b
on a.id = b.author_id

--Exercise 3: Using RIGHT JOIN
--Write a query to retrieve all books and their corresponding authors. Include books without a known author.

select b.title, a.name
from
books b
right join 
authors a
on 
b.author_id = a.id

--Exercise 4: Using FULL JOIN
--Write a query to retrieve all books and authors, even if they don’t match.


