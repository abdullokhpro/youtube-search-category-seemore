import React from "react";
import "./category.scss";
import { YOUTUBE_DATA } from "../../static";

const Category = ({ setCategory }) => {
  const categories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing",
  ];
  return (
    <div className="category">
      <div className="container category__container">
        <ul className="category__list">
          {categories.map((category) => (
            <li key={category} className="category__item">
              <a href="#" onClick={() => setCategory(category)}>
                {category}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
