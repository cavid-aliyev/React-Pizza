import filterReducer from './filters'
import pizzasReducer from './pizzas'
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    filters: filterReducer,
    pizzas: pizzasReducer,
})

export default rootReducer


