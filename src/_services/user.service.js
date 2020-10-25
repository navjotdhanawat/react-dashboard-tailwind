import { authHeader } from "../utils/auth-header";
import axios from "axios";

const config = {
  apiUrl: "http://localhost:3001",
};

const login = ({ email, password }) => {
  return axios
    .post(`/api/v1/admin/login`, { email, password })
    .then(({ data: response }) => {
      const {
        data: { user },
        success,
      } = response;
      if (success) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem("user", JSON.stringify(user));
      }
      return user;
    })
    .catch(({ response }) => {
      debugger;
    });
};

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function register(user) {

  return axios
    .post(`/api/v1/admin/register`, user)
    .then(({ data: response }) => {
      const {
        message,
        success,
      } = response;
      return success;
    })
    .catch(({ response }) => {
      debugger;
    });
}

function isLoggedIn() {
  return JSON.parse(localStorage.getItem("user"));
}

export { login, logout, register, isLoggedIn };
