import axios from "axios";

export const authAction = () => async (dispatch) => {
  try {
    const getUser = await axios.get(
      "https://calm-beyond-30005.herokuapp.com/auth/google/api/current_user"
    );
    dispatch({ type: "FETCH_USER", payload: getUser.data });
  } catch (error) {
    console.log(error);
  }
};
