import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ref, push } from "firebase/database";
import { database } from "../../../../firebase";
import "./Checkout.css";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state || {};

  if (!book) {
    return (
      <div className="checkout-container">No book selected for purchase.</div>
    );
  }

  const handleConfirmPurchase = () => {
    push(ref(database, "purchases"), book)
      .then(() => {
        alert("Purchase confirmed!");
        navigate("/product");
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-card">
        <img src={book.image} alt={book.title} />
        <div className="checkout-details">
          <h3>{book.title}</h3>
          <p>Price: ${book.price}</p>
          <button onClick={handleConfirmPurchase}>Confirm Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
