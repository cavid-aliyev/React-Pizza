//reducer for only filters (category, popup)

const initialState = {
    category: 0, //for index
    sortBy: 'popular' //popup
}

const filters = (state = initialState, action) => {

    switch (action.type) {
        case "SET_SORT_BY":
            return {
                ...state,
                sortBy: action.payload
            }

        case "SET_CATEGORY":
            return {
                ...state,
                category: action.payload
            }

            
        default:
            return state
    }
}

export default filters;