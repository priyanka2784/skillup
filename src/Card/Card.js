import React from "react";
import "./Card.css";
const Card = ({
  className,
  title,
  description,
  buttonText,
  bgcolor,
  imgsrc,
}) => {
  return (
    <div className={`Card ${className}`} style={{ backgroundColor: bgcolor }}>
      <div className="card-header">
        <h2>{title}</h2>
        <img src={imgsrc} alt={`${title} logo`} className="cardlogo" />
      </div>

      <p>{description}</p>
      <button className="cardButton">{buttonText}</button>
    </div>
  );
};
export default Card;
