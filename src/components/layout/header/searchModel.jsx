import React from "react";
import { YOUTUBE_DATA } from "../../../static";
import { NavLink } from "react-router-dom";

const SearchModel = ({ search }) => {
  const handleFilterSearch = YOUTUBE_DATA?.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase())
  );

  let searchItems = handleFilterSearch?.map((el) => (
    <div className="header__search__detail__content" key={el.id}>
      <img src={el.image} width={25} alt="" />
      <span>{el.title}</span>
    </div>
  ));

  return (
    <div className="header__search__detail">
      {YOUTUBE_DATA && YOUTUBE_DATA.length === 0 ? (
        <h3>Malumot topilmadi</h3>
      ) : (
        <></>
      )}
      {searchItems}
    </div>
  );
};

export default SearchModel;
