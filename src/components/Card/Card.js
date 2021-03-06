import React from "react";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <div className="card">
      <img src="" alt="картинка" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">React JS</h5>
        <Link to="'/profile/'+'react'" className="btn btn-primary">
          Открыть
        </Link>
      </div>
    </div>
  );
};

export default Card;
