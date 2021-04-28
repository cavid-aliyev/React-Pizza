import React, {useEffect} from 'react'
import {Header} from './components';
import {HomePage, CartPage} from './pages';
import {Route} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setPizzas} from './redux/actions/pizzas'
import axios from 'axios'

function App() {

  const dispatch = useDispatch();

  // server works
  useEffect(() => {
      axios.get("http://localhost:3001/pizzas").then(({data}) => {
        dispatch(setPizzas(data)) //setPizza is action
      });
  }, [dispatch]);


  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
       <Route exact path="/" component={HomePage}/> 
       <Route exact path="/cart" component={CartPage}/> 
      </div>
    </div>
  );
}



export default App;
