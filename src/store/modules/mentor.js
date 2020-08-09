import MentorService from "../../services/mentor-service";

 const state = {
  mentors: []
};

const getters = {
  getMentor(state) {
    return state.mentors;
  }
};

const mutations = {
 
  updateMentorsList(state, mentor) {
    state.mentors.push(mentor);
  },

  saveMentor(state, mentor) {
    state.mentors.push(mentor);
  }
};

 const actions = {
 
  registerMentor({ commit }, mentor) {
    console.log("register mentor ---->:", mentor);
    return MentorService.registerMentor(mentor).then(
      response => {
        commit("saveMentor");
        console.log("resgister mentor --> :", response);
        return response;
      },
      error => {
        //commit("registerFailure");
        return response;
      }
    );
  },

  async getMentor({ commit },userId) {
    return await MentorService.getMentor(userId)
    .then(response => {
      let data = response.data;
      for (let key in data) {
        commit("updateMentorsList", data[key]);
      }

      console.log("profile mentors --->:", data);
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
