import getConfig from "next/config";


const {publicRuntimeConfig} = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`

export const userService = {
  login,
  logout,
  register,
};

function login(username, password) {

}

function logout() {
}

function register(user) {
}


