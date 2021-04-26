//reducer for only filters (category, popup)

const initialState = {
    category: 0, //for index
    sortBy: 'popular' //popup
}

const filters = (state = initialState, action) => {
    if(action.type === 'SET_SORT_BY'){
        return {
            ...state,
            sortBy: action.payload,
        }
    }

    return state;
}

export default filters;