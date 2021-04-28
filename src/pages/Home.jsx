import React from "react";
import { Categories, SortPoppup, PizzaBlock } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/filters";

const categoryNames = [
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
const sortItems = [
  { name: "популярные", type: "popular" },
  { name: "цене", type: "price" },
  { name: "алфавиту", type: "alphabet" },
];

function HomePage() {  
  const dispatch = useDispatch();

  //take pizzas from pizzas reducer
  const items = useSelector(({ pizzas }) => pizzas.items);

  const handleCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []); //birdefe silka yaratdiqki rerender olmasin

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={handleCategory} items={categoryNames} />
        <SortPoppup items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items &&
          items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)}
      </div>
    </div>
  );
}

export default HomePage;
