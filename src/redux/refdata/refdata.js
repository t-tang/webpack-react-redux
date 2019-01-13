import { login } from './login/login'

export const refdata = (state = {}, action) => ({
    login: login(state.login, action)
})