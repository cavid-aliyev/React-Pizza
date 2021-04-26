import React, {useEffect} from 'react'
import {Header} from './components';
import {HomePage, CartPage} from './pages';
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {setPizzas} from './redux/actions/pizzas'
import axios from 'axios'

function App({items}) {
  // server works
  useEffect(() => {
      axios.get("http://localhost:3000/db.json").then(({data}) => {
        setPizzas(data.pizzas)
      })
  }, [])

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


const mapStateToProps = state => {
  return {
    items: state.pizzas.items
  }
}

const mapDispatchToProps = dispatch => {
  //or setpizzas
  return {
    // first name is our (savepizza ex) func name and it runs setpizzas dispatch
   setPizzas: (items) => dispatch(setPizzas(items)),
  //  note: if prop and action name is equal u can write like:
  //setpizzas thats all
   dispatch
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
