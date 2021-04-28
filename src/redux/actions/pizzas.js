import axios from 'axios'

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload
})

//get pizzas
export const fetchPizzas = () => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get("http://localhost:3001/pizzas").then(({data}) => {
       dispatch(setPizzas(data)) 
      });
}

//save pizzas
export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
})