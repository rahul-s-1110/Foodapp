import React from "react";
import Navbar from "../component/navbar";
import HeroComponent from "../component/heroComp";
import HeadlineCard from "../component/headlineCard";
import FoodList from "../component/foodList";
import CategoryList from "../component/categoryList";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroComponent />
      <HeadlineCard />
      <FoodList />
      <CategoryList />
    </div>
  );
};

export default HomePage;
