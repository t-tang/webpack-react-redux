const path = '/refdata/login'

export const actionTypes = {
    LOGIN: `${path}/login`,
    LOGOUT: `${path}/logout`
}

export const LoginActions = {
    login: (user) => ({ type: actionTypes.LOGIN, user: user }),
    logout: () => ({})
}