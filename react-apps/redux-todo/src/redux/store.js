import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import TodoReducer from './reducers/TodoReducer';

// list all reducers here for each store object
const reducers = combineReducers({
    Todo: TodoReducer
});

// initialize the state in store
const initialState = {};

// bind middleware
const middleWare = [thunk];

// create store with above configs
const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;