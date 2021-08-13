import axios from "axios";

export const authAction = () => {
  return function (dispatch) {
    axios
      .get("/api/current_user")
      .then((res) => dispatch({ type: "AUTH_TYPE", payload: res }));
  };
};
