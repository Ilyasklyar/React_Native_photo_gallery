import { GET_PROFILE_LIST, GET_NEW_PAGE } from "../actions/actionTypes"


const inicialState = {
    profileList: [],
    page: 1
}

export default profileReducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_PROFILE_LIST: {
            return {
                ...state, profileList: action.data
            }
        }
        case GET_NEW_PAGE: {
            console.log('111', action);

            return {
                ...state, page: ++action.data
            }
        }
        default:
            return state
    }
}