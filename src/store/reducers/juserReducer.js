import {UPDATE_JUSER} from '../actions/juserActions';

const juserReducer = (state={}, {type, payload}) =>{
    switch(type) {
        case UPDATE_JUSER:{
            // return {name: payload}
            return payload
        }
        default:
            return state;
    }
}

export default juserReducer;