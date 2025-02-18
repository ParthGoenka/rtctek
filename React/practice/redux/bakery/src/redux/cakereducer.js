
const initialState = {
    numberOfCakes: 10, 
    numberOfIce:15,
    numberOfDrinks:20
};

const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BUY_CAKE":
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - action.payload,
            };
            case "BUY_ICE":
            return {
                ...state,
                numberOfIce: state.numberOfIce -  action.payload,
            };
            case "BUY_DRINK":
            return {
                ...state,
                numberOfDrinks: state.numberOfDrinks - action.payload,
            };
        default:
            return state;
    }
};

export default cakeReducer;
