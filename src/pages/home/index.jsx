import React from "react";
import Header from "../../components/layout/header";
import Category from "../../components/category";
import Cards from "../../components/cards";
import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <Category setCategory={setCategory} /> 
      <Cards search={search} category={category} setCategory={setCategory} />
    </>
  );
};

export default Home;
