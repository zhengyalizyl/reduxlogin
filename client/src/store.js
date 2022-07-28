import thunk from 'redux-thunk';
import { applyMiddleware, createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import { userLoginReducer, userRegisterReducer } from './reducers/userReducer';

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
});

const userInfo = localStorage.getItem('userInfo');
const userItemsFromStorage = userInfo ? JSON.parse(userInfo) : null;

const initialState = {
    userLogin: { userInfo: userItemsFromStorage }
}


const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;