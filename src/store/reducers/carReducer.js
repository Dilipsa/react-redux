import UPDATE_CAR from '../actions/carActions';

const carReducer = (state={}, {type, payload}) => {
    switch (type) {
        case UPDATE_CAR: {
            return {name:payload}
        }
        default:
            return state;
    }
}
export default carReducer;