import { ApiURL } from "../../utility/endpoint";
import httpClient from "../../services/httpClient";
import Axios from "axios";
import AuthService from "../../services/auth-service";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? { status: { loggedIn: true }, user }
  : { status: { loggedIn: false }, user: null };

export const state = {
  studentUser: {
    error: false,
    result: {
      code: 0,
      result: "",
      important: false,
      tr: "",
      en: ""
    },
    data: {
      userData: {
        id: 0,
        idDetail: "",
        institutionCode: "",
        type: 0,
        companyID: 0,
        mail: ""
      },
      period: {
        id: 0,
        periodVcode: "",
        periodName: "",
        periodStatus: 0
      }
    }
  },
  initialState
};

export const getters = {};

export const mutations = {
  setToken(state, userData) {
    state.studentUser = userData;
  },

  loginSuccess(state, user) {
    state.status.loggedIn = true;
    state.user = user;
  },
  loginFailure(state) {
    state.status.loggedIn = false;
    state.user = null;
  },
  logout(state) {
    state.status.loggedIn = false;
    state.user = null;
  },
  registerSuccess(state) {
    state.status.loggedIn = false;
  },
  registerFailure(state) {
    state.status.loggedIn = false;
  }
};

export const actions = {
  /*
  login1({ commit, dispatch, state }, authData) {
    let authLink = ApiURL.studentLogin;
    console.log("authData", authData);
    console.log("this.httpClient", httpClient);
    return httpClient
      .post(authLink, authData)
      .then(response => {
        console.log("response", response);
        commit("setUserInfo", response);
        return response;
      })
      .catch(response => {
        return response;
      });
  }
  */
  
  login({ commit }, user) {
    return AuthService.login(user)
    .then(
      response => {
        // commit('loginSuccess', user);
        console.log("Login user ----> :", response.data);
        return response.data;
      },
      error => {
        commit("loginFailure");
        return Promise.reject(error);
      }
    );
  },

  // logout kismi
  /*
  logout({ commit }) {
    AuthService.logout();
    commit("logout");
  }
  */

  // register
  register({ commit }, user) {
    return AuthService.register(user)
    .then(response => {
      //  commit("registerSuccess");
        return response;
      },
      error => {
        //commit("registerFailure");
        return response
      }
    );
  },

  // forgot passowrd
  forgotPassword({ commit }, user) {
    return AuthService.forgotPassword(user)
    .then(response => {
      console.log(" forgot password   -------> : ", response.data);
      return response;
    });
  },

  resetPassword({commit},user){
   return AuthService.resetPassword(user)
   .then(response =>{
    console.log(" reset password   -------> : ", response.data);
     return response;
   })
  },

  loginWithWoogle({ commit }) {
    return AuthService.loginWithWoogle().then(response => {
      console.log("loginWithGoogle ---> :", response);
    });
  }
};



  /*
   return  httpClient
   .post(authLink, authData)
   .then(response => {
     console.log("response", response);
   //  commit("setUserInfo", response);
     return response;
   })
   .catch(response => {
     console.log("error-response", response);
     return response;
   });*/

export default {
  state,
  getters,
  mutations,
  actions
};
