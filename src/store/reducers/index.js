import { combineReducers } from "redux";
import lang from "./Lang";
import loader from "./Loader";
import snackbar from "./Snackbar";
import ReducerExample from "./ReducerExample";
import authentication from "./authentication";

export default combineReducers({
  lang,
  loader,
  snackbar,
  authentication
});
