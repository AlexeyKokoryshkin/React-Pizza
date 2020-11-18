import axios from 'axios';

export const fetchPizzas = () => (dispatch) => {                        // Асинхронный экшн (redux-thunk)
    dispatch(setLoaded(false));
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
        dispatch(setPizzas(data));
    });
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
}); 

export const setLoaded = payload => ({
    type: 'SET_LOADED',
    payload
})