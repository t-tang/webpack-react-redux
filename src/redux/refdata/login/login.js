import { actionTypes } from './actions'

const initialState = {
    isLoggedIn: false,
    user: {}
}

export const login = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN: return ({ isLoggedIn: true, user: action.user })
        case actionTypes.LOGOUT: return ({ isLoggedIn: false, user: {} })
        default: return state
    }
}