import axios from 'axios'

//get pizzas
export const fetchPizzas = () => (dispatch) => {
    axios.get("http://localhost:3001/pizzas").then(({data}) => {
       dispatch(setPizzas(data)) 
      });
}

//save pizzas
export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
})