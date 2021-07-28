export const initialState = {
    user: null
};
export const initState = {
    thread: 'general',
}

export const initAddrState = {
    address: '',
}

export const initLatLngState = {
    center: {    
        lat: 33.94866,
        lng: -118.30118
    }
    
}
export const actionTypes = {
    SET_USER: "SET_USER",
    SET_THREAD: "SET_THREAD",
    SET_ADDRESS: "SET_ADDRESS",
    SET_COORDINATES: "SET_COORDINATES",
};

const reducer = (state, action) => {

    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            };
        case actionTypes.SET_THREAD:
            return {
                ...state,
                thread: action.thread,
            };
        case actionTypes.SET_ADDRESS:
            return {
                ...state,
                address: action.address,
            }
        case actionTypes.SET_COORDINATES:
            return {
                ...state,
                center: action.center,
            }
        default:
            return state;
    }
};

export default reducer;