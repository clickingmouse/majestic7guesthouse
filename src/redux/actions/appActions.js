import { GET_APPS, ADD_APP, DELETE_APP, APPS_LOADING } from "./appTypes";
import { tokenConfig } from "./authActions";
import { returnErrors } from "./errorActions";
import axios from "axios";
// export const getItems = () => {
//   return {
//     type: GET_APPS
//   };
// };

export const getApps = () => dispatch => {
  dispatch(setAppsLoading());
  axios
    .get("/api/apps")
    .then(res => {
      console.log("retrieved from database...");
      console.log(res.data);
      dispatch({
        type: GET_APPS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );

  // return {
  //   type: GET_APPS
  // };
};

// export const addItem = item => {
//   //console.log("====>", id);
//   return {
//     type: ADD_APP,
//     payload: item
//   };
// };

//, tokenConfig(getState)
export const addApp = app => (dispatch, getState) => {
  console.log("====>", app);
  console.log(JSON.stringify(app));
  const headers = {
    Accept: "application/json",
    //    "Content-Type": "application/x-www-form-urlencoded"
    "Content-Type": "multipart/form-data"
  };
  let formData = new FormData();
  //formData.append("logo", app.logoFile)
  formData.append("logoFile", app.logoFile);
  formData.append("appName", app.appName);
  formData.append("appDescription", app.appDescription);
  formData.append("suggestedBy", app.suggestedBy);
  formData.append("authorName", app.authorName);
  formData.append("authorID", app.authorID);

  console.log(">>>>>>>>>>", formData);
  axios
    .post("/api/apps", formData, headers)
    .then(res =>
      dispatch({
        type: ADD_APP,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// export const deleteItem = id => {
//   //console.log("====>", id);
//   return {
//     type: DELETE_APP,
//     payload: id
//   };
// };

export const deleteApp = id => (dispatch, getState) => {
  console.log("====>", id);
  axios
    .delete(`/api/apps/${id}`, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: DELETE_APP,
        payload: id
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setAppsLoading = () => {
  return {
    type: APPS_LOADING
  };
};
