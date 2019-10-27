import uuid from "uuid";
import {
  GET_APPS,
  ADD_APP,
  DELETE_APP,
  APPS_LOADING
} from "../actions/itemTypes";
// const initialState = {
//   items: [
//     { id: uuid(), name: "EGGs" },
//     { id: uuid(), name: "Milk" },
//     { id: uuid(), name: "Steak" },
//     { id: uuid(), name: "Water" }
//   ]
// };

const initialState = {
  items: [],
  loading: false
};

export default function(state = initialState, action) {
  console.log("itemReducer>>>", action);
  switch (action.type) {
    case GET_APPS:
      //console.log(action.payload);
      return { ...state, items: action.payload, loading: false };
    case ADD_APP:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case DELETE_APP:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      };
    case APPS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
