import React, { useState } from "react";
import "./cards.scss";
import { YOUTUBE_DATA } from "../../static";

const Cards = ({ search, category }) => {
  const [perPage, setPerPage] = useState(4);

  // See more ishlashi uchun funksiya
  const handleSeeMore = () => {
    setPerPage((count) => count + 4);
  };

  const handleFilterSearch = YOUTUBE_DATA.filter((data) => {
    const matchesSearch = data.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory = category ? data.category === category : true;
    return matchesSearch && matchesCategory;
  });

  // slice method ni ishlatb 0 - 4 orasda chiqardm
  const card__data = handleFilterSearch.slice(0, perPage).map((data) => (
    <div key={data.id} className="cards__wrapper">
      <div className="cards__top">
        <img src={data.image} alt="" />
      </div>
      <div className="cards__bottom">
        <h3 className="cards__title">{data.title}</h3>
        <p className="cards__text">{data.category}</p>
      </div>
    </div>
  ));

  return (
    <div className="cards">
      <div className="container cards__container">{card__data}</div>
      {perPage < YOUTUBE_DATA.length && (
        <button className="cards__button" onClick={handleSeeMore}>
          See more
        </button>
      )}
    </div>
  );
};

export default Cards;
