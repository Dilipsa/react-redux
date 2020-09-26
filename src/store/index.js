import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import gameReducer from './reducers/gameReducer';
import personReducer from './reducers/personReducer';
import userReducer from './reducers/userReducer';
import juserReducer from './reducers/juserReducer';
import carReducer from './reducers/carReducer';

const AllReducers = combineReducers({
    game:gameReducer,
    person:personReducer,
    users: userReducer,
    jusers: juserReducer,
    cars: carReducer
    })

const initialState = {
    game: {name: "Football"},
    person: {name: "Sarthak", "email": "Sarthak@gmail.com"},
    users: [],
    jusers: [],
    cars: {name: "Maruti 800"}
}

const middleware = [thunk]
const store = createStore(AllReducers, initialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;