import httpClient from "../services/httpClient";

const API_URL = "http://localhost:4000/api/auth/";

class AuthService {
  login(user) {
    return httpClient
      .post(API_URL + "signin", {
        email: user.email,
        password: user.password
      })
      .then(response => {

        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
     
         
         
          let user = JSON.stringify(response.data);
          localStorage.setItem("user", user);
         
        }
        
        return response;
      });
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");

    return true;
  }

  isAuth() {
    var token = localStorage.getItem("token");
    if (token != null && token != "" && token != undefined) return true;
    else return false;
  }

  register(user) {
    return httpClient.post(API_URL + "signup", {
      name: user.name,
      surname: user.surname,
      email: user.email,
      password: user.password
    });
  }

  forgotPassword(user) {
    return httpClient.post(API_URL + "forgotten-password", {
      email: user.email
    });
  }

  resetPassword(user) {
    return httpClient.post(API_URL + "forgot-password/" + user.token, {
      newPassword: user.password
    });
  }

  loginWithWoogle() {
    return httpClient.get(API_URL + "google").then(response => {});
  }
}

export default new AuthService();
