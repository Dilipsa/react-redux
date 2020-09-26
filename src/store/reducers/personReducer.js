import {UPDATE_PERSON} from '../actions/personActions';

const personReducer = (state={}, {type, payload}) =>{
    switch(type) {
        case UPDATE_PERSON:{
            // return {name: payload}    <----------fetching updated values only
            return Object.assign({}, state, {name:payload})
        }
        default:
            return state;
    }
}

export default personReducer;