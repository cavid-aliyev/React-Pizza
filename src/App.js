import React, {useEffect} from 'react'
import {Header} from './components';
import {HomePage, CartPage} from './pages';
import {Route} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {fetchPizzas} from './redux/actions/pizzas'


function App() { 

  const dispatch = useDispatch();

  // server works
  useEffect(() => {
    dispatch(fetchPizzas());
  }, []);


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
