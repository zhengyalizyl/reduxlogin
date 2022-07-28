import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
} from "../constants/userConstants"

export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST });
        const { data: { data, success } } = await axios.post('/api/users/login', { email, password });
        if (success) {
            dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
            localStorage.setItem('userInfo', JSON.stringify(data))
        } else {
            dispatch({ type: USER_LOGIN_FAIL })
        }

    } catch (error) {

        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error
        })
    }
}

export const register = (email, password) => async(dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });
        const { data: { data, success } } = await axios.post('/api/users/register', { email, password });
        console.log(data, success)
        if (success) {
            dispatch({ type: USER_REGISTER_SUCCESS, payload: data }); //注册成功后，让其自动登录
            dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
            localStorage.setItem('userInfo', JSON.stringify(data))
        } else {
            dispatch({ type: USER_REGISTER_FAIL })
        }

    } catch (error) {

        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error
        })
    }
}