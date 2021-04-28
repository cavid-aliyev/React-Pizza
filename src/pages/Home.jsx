import React, { useEffect } from "react";
import {
  Categories,
  SortPoppup,
  PizzaBlock,
  LoadingBlock,
} from "../components";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../redux/actions/filters";
import { fetchPizzas } from "../redux/actions/pizzas";

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
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  // server works
  useEffect(() => {
    dispatch(fetchPizzas());
  }, [category]);  

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
        {isLoaded
          ? items.map((pizza) => <PizzaBlock key={pizza.id} {...pizza} />)
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default HomePage;
