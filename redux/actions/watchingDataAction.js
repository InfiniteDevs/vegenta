import { MyAction } from "./actions";

const fetchData = () => {
  return { type: MyAction.FETCH };
};
const receiveData = (payload) => {
  return { type: MyAction.RECEIVE, payload: payload };
};

export const watchingDataAction = (URL) => {
  return async function (dispatch) {
    dispatch(fetchData());
    console.log(URL);
    try {
      const response = await fetch(URL);
      const res = await response.json();
      const gogoServer = res[1]; // accessing the second object in the array
      if (!gogoServer) {
        console.log("not existing")
        const res = "not existing"
        dispatch(receiveData(res));
      }
      else {
        const result = gogoServer.url;
        dispatch(receiveData(result));
      }
    } catch (error) {
      // handle errors
      console.error('Error fetching data:', error);
    }
  };
};
