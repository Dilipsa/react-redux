export const UPDATE_JUSER =  'UPDATE_JUSER';

const fetch_juser = (dispatch) => {
    fetch('https://reqres.in/api/users')
    .then(res => res.json())
    // .then(res => console.log(res.data))
    .then(res => dispatch({type: UPDATE_JUSER, payload: res.data}))
}

export default fetch_juser;

