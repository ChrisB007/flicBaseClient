import authAction from "../actions/authAction";

const authData = {};

function authReducer(state = authData, action) {
  console.log(action);
  switch (action.type) {
    default:
      return state;
  }
}

export default authReducer;
