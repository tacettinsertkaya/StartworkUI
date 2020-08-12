import InvestorService from "../../services/investor-service";

 const state = {
    investors: []
};

const getters = {
  getInvestor(state) {
    return state.investors;
  }
};

const mutations = {
 
  updateInvestorsList(state, investor) {
    state.investors.push(investor);
  },

  saveInvestor(state, investor) {
    state.investors.push(investor);
  }
};

 const actions = {
 
  registerInvestor({ commit }, investor) {
    console.log("register investor ---->:", investor);
    return InvestorService.registerInvestor(investor).then(
      response => {
        commit("saveInvestor");
        console.log("resgister investor --> :", response);
        return response;
      },
      error => {
        //commit("registerFailure");
        return response;
      }
    );
  },

  async getInvestor({ commit },userId) {
    return await InvestorService.getInvestor(userId)
    .then(response => {
      let data = response.data;
      for (let key in data) {
        commit("updateInvestorsList", data[key]);
      }

      console.log("profile investor --->:", data);
      return response;
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
