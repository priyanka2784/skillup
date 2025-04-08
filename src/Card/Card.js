import React from "react";
import "./Card.css";
const Card = ({
  className,
  title,
  description,
  buttonText,
  bgcolor,
  imgsrc,
  onClick,
}) => {
  return (
    <div className={`Card ${className}`} style={{ backgroundColor: bgcolor }}>
      <div className="card-header">
        <h2>{title}</h2>
        {/* <button onClick={onClick}> {buttonText}</button> */}
        <img src={imgsrc} alt={`${title} logo`} className="cardlogo" />
      </div>

      <p>{description}</p>
      <button className="cardButton" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};
export default Card;
