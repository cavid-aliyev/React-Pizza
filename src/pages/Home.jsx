import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPoppup, PizzaBlock, LoadingBlock } from '../components';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortIems = [
  { name: 'популярности', type: 'popular', order: 'desc'},
  { name: 'цене', type: 'price', order: 'desc'},
  { name: 'алфавит', type: 'name', order: 'asc'},
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [dispatch,sortBy, category]);

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, [dispatch]);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, [dispatch]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickCategory={onSelectCategory}
          items={categoryNames}
        />
        <SortPoppup
          activeSortType={sortBy.type}
          items={sortIems}
          onClickSortType={onSelectSortType}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((obj) => (
              <PizzaBlock
                key={obj.id}
                {...obj}
              />
            ))
          : Array(12)
              .fill(0)
              .map((_, index) => <LoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
