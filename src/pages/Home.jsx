import React from "react";
import { Categories, SortPoppup, PizzaBlock } from "../components";

function HomePage({ pizzaData }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(item) => console.log(item)}
          items={["Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"]}
        />
        <SortPoppup
          items={[
            { name: "популярные", type: "popular" },
            { name: "цене", type: "price" },
            { name: "алфавиту", type: "alphabet" },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzaData && pizzaData.map((pizza) => (
          <PizzaBlock key={pizza.id} {...pizza} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
