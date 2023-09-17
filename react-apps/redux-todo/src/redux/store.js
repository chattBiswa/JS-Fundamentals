import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import TodoReducer from './reducers/TodoReducer';

const reducers = combineReducers({
    Todo: TodoReducer
});

const initialState = {};

const middleWare = [thunk];

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;