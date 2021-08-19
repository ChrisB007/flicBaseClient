import axios from "axios";

export const authAction = () => async (dispatch) => {
  try {
    const getUser = await axios.get("/auth/google/api/current_user");
    dispatch({ type: "FETCH_USER", payload: getUser.data });
  } catch (error) {
    console.log(error);
  }
};
