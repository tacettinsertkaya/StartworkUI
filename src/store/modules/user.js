import axios from "axios";


  const state = {
   token: ""
 };

  const getters = {
   
 };

 const mutations = {
  setToken(state, accessToken) {
    state.token = accessToken;
  },
  clearToken(state) {
    state.token = "";
  }
};

const actions = {
    saveUser({commit},user){
      console.log("User --------> : ",user);
        axios.post("http://localhost:4000/api/auth/signup",user)
            .then(response=>{
              // commit("updateUserList",response.data);
                console.log(response)
            })
    
        },
  login({ commit, dispatch, state }, authData) {},
  logout({ commit, dispatch, state }) {}
};

export default {
  state,
  getters,
  mutations,
  actions
};
