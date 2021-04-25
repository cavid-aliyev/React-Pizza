import React, {useState, useEffect} from 'react'
import {Header} from './components';
import {HomePage, CartPage} from './pages';
import {Route} from 'react-router-dom'

function App() {
  const [pizzas, setPizzas] = useState([])

  // server works
  useEffect(() => {
      fetch("http://localhost:3000/db.json")
           .then(res => res.json())
           .then(json => {
             setPizzas(json.pizzas)
           })
  }, [])

  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
       <Route exact path="/" render={() => <HomePage pizzaData={pizzas}/>}/> 
       <Route exact path="/cart" component={CartPage}/> 
      </div>
    </div>
  );
}

export default App;
