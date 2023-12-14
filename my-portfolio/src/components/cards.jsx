import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ title, description, id, iconSrc }) => {
  return (
    <Link to={`/projects/${id}`}>
      <div className="cardContainer">
        {iconSrc && (
          <img className="cardiconSrc" alt="iconSrc" src={iconSrc}></img>
        )}
        {title && <h2 className="cardTitle">{title}</h2>}
        {description && <p className="cardDescription">{description}</p>}
      </div>
    </Link>
  );
};
