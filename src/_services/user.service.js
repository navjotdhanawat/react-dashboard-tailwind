import { authHeader } from "../utils/auth-header";
import axios from "axios";

const config = {
  apiUrl: "http://localhost:3001",
};

const login = ({ email, password }) => {
  debugger;
  return axios
    .post(`/api/v1/admin/login`, { email, password })
    .then(({data: response}) => {
        const { data: { user }, success} = response;
        debugger
        if (success) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("user", JSON.stringify(user));
        }
        return user;
      }
    )
    .catch(({ response }) => {
      debugger;
    });
};

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}

function register(user) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  };

  return fetch(
    `${config.apiUrl}/api/v1/admin/register`,
    requestOptions
  ).then(() => {});
}

// function handleResponse({data}) {
//     debugger
//     return response.text().then(text => {
//         const data = text && JSON.parse(text);

//         if (!response.ok) {
//             if (response.status === 401) {
//                 // auto logout if 401 response returned from api
//                 logout();
//             }

//             const error = (data && data.message) || response.statusText;
//             return Promise.reject(error);
//         }

//         return data;
//     });
// }

function isLoggedIn() {
  return JSON.parse(localStorage.getItem("user"));
}

export { login, logout, register, isLoggedIn };
