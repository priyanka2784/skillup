// BookStore.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { ref, push } from "firebase/database";
import { database } from "../../../../firebase";

import "./BookStore.css";

export const books = [
  {
    id: 1,
    title: "Python Programming",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/6138qaVFTPL._AC_UL232_SR232,232_.jpg",
    price: 39.99,
  },
  {
    id: 2,
    title: "Automate the Boring Stuff with Python",
    image:
      "https://m.media-amazon.com/images/I/715PNi5Wa2L._UF1000,1000_QL80_.jpg",
    price: 29.99,
  },
  {
    id: 3,
    title: "The Pragmatic Programmer",
    image: "https://m.media-amazon.com/images/I/51A8l+FxFNL._SL500_.jpg",
    price: 45.99,
  },
  {
    id: 4,
    title: "Clean Code",
    image:
      "https://elpythonista.com/wp-content/uploads/2020/10/Clean_Code-portada-1024x576.jpg",

    price: 42.5,
  },
  {
    id: 5,
    title: "Code Complete",
    image: "https://m.media-amazon.com/images/I/61GzazUmKyL.jpg",
    price: 50.0,
  },
  {
    id: 6,
    title: "Introduction to Algorithms",
    image:
      "https://m.media-amazon.com/images/I/61ZYxrQEpCL._AC_UF1000,1000_QL80_.jpg",
    price: 70.0,
  },
  {
    id: 7,
    title: "The C Programming Language",
    image:
      "https://m.media-amazon.com/images/I/61aRzzEz7sL._UF1000,1000_QL80_.jpg",
    price: 32.99,
  },
  {
    id: 8,
    title: "Structure and Interpretation of Computer Programs",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/w/p/4/structure-and-interpretation-of-computer-programs-original-imaghun6cqpqtuzy.jpeg?q=90&crop=false",
    price: 36.0,
  },
  {
    id: 9,
    title: "Design Patterns",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3RlmyNdlvaDaF4fBC_34t50oyhTmAmUlquA&s",
    price: 49.99,
  },
  {
    id: 10,
    title: "Refactoring",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1386925632i/44936.jpg",
    price: 44.0,
  },
  {
    id: 11,
    title: "The Art of Computer Programming",
    image:
      "https://images-eu.ssl-images-amazon.com/images/I/71cNWvC-eFL._AC_UL600_SR600,600_.jpg",
    price: 120.0,
  },
  {
    id: 12,
    title: "Effective Java",
    image:
      "https://m.media-amazon.com/images/I/51Bm4PuloJL._AC_UF1000,1000_QL80_.jpg",
    price: 40.0,
  },
  {
    id: 13,
    title: "JavaScript: The Good Parts",
    image:
      "https://www.designveloper.com/wp-content/uploads/2021/01/Classic-Books-about-JavaScript-JavaScript-The-Good-Part.jpg",
    price: 25.99,
  },
  {
    id: 14,
    title: "Eloquent JavaScript",
    image:
      "https://m.media-amazon.com/images/I/71QITpqP5SL._UF1000,1000_QL80_.jpg",
    price: 27.5,
  },
  {
    id: 15,
    title: "Head First Design Patterns",
    image:
      "https://m.media-amazon.com/images/I/71SdDjMglAL._AC_UF1000,1000_QL80_.jpg",
    price: 38.0,
  },
  {
    id: 16,
    title: "You Don't Know JS",
    image: "https://m.media-amazon.com/images/I/71mKvD89oEL.jpg",
    price: 30.0,
  },
  {
    id: 17,
    title: "Cracking the Coding Interview",
    image:
      "https://m.media-amazon.com/images/I/61-CjJQ1f4L._AC_UF1000,1000_QL80_.jpg",
    price: 35.0,
  },
  {
    id: 18,
    title: "Learn Python the Hard Way",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-tOWHxgB7wFxb7tZsDJLtQhdCQP_NMBYbcA&s",
    price: 28.0,
  },
];

const BookStore = () => {
  const navigate = useNavigate();

  const handleAddToCart = (book) => {
    alert(`${book.title} added to cart!`);
    push(ref(database, "cart"), book);
  };

  const handleBuyNow = (book) => {
    navigate("/checkout", { state: { book } });
  };

  return (
    <div className="bookstore">
      <h1>Programming Books</h1>
      <div className="book-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <img src={book.image} alt={book.title} />
            <p>${book.price}</p>
            <button onClick={() => handleAddToCart(book)}>Add to Cart</button>
            <button className="buy" onClick={() => handleBuyNow(book)}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookStore;
