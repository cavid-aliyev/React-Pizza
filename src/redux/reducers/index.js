import filterReducer from './filters'
import pizzasReducer from './pizzas'
import cartReducer from './cart'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    filters: filterReducer,
    pizzas: pizzasReducer, 
    cart: cartReducer
})

export default rootReducer


