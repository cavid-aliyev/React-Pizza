import React, {useEffect} from 'react'
import {Header} from './components';
import {HomePage, CartPage} from './pages';
import {Route} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {setPizzas} from './redux/actions/pizzas'
import axios from 'axios'

function App() {

  const dispatch = useDispatch();
  // state is our hranilishe hardaki our all stateler var
  const state = useSelector(({pizzas, filters}) => {
    return {
      // istifade olunacaq stateleri cixardiram
       items: pizzas.items,
       sortBy: filters.sortBy
    };
  });

  
  // server works
  useEffect(() => {
      axios.get("http://localhost:3000/db.json").then(({data}) => {
        dispatch(setPizzas(data.pizzas)) //setPizza is action
      });
  }, []);



  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
       <Route exact path="/" render={() => <HomePage items={items}/>}/> 
       <Route exact path="/cart" component={CartPage}/> 
      </div>
    </div>
  );
}



export default App;
