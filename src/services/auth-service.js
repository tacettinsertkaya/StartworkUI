import axios from 'axios';

const API_URL = 'http://localhost:4000/api/auth/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'signin', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem('token',response.data.token);
        }
        console.log("response data ---> :",response.data.token);
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      name: user.name,
      surname :user.surname,
      email: user.email,
      password: user.password
    })
    .then(response =>{
      console.log("response ---> ", response);
    })
  }
  
  loginWithWoogle(){
    return axios.get(API_URL+'google')
    .then(response=>{

    })
  }
}

export default new AuthService();
