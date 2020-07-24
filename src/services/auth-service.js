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
        }
        //console.log("response data ---> :", response.data);
       return response;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(user) {
    return httpClient
      .post(API_URL + "signup", {
        name: user.name,
        surname: user.surname,
        email: user.email,
        password: user.password
      })
      
  }

  forgotPassword(user){
    return httpClient
    .post(API_URL+"forgotten-password",{
      email:user.email
    })
  }

  loginWithWoogle() {
    return httpClient
    .get(API_URL + "google")
    .then(response => {});
  }
}

export default new AuthService();
