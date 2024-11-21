import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  console.log(data);
  const card = data;
  return (
    <div className="container">
      {card &&
        card.map((item) => {
          return (
            <div
              key={item.id}
              className="card"
              onClick={() => navigate(`/product/${item.id}/view`)}
            >
              <img src={item.images} />
              <h3>{item.title}</h3>
              <p>Price: {item.price}</p>
              <p>{item.location}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ProductCard;
