import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ title, description, id, icon }) => {
  return (
    <Link to={`/projects/${id}`}>
      <div className="cardContainer">
        {icon && <img className="cardIcon" alt="icon" src={icon}></img>}
        {title && <h2 className="cardTitle">{title}</h2>}
        {description && <p className="cardDescription">{description}</p>}
      </div>
    </Link>
  );
};
