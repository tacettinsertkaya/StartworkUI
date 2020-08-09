import ProfileService from "../../services/profile-service";

export const state = {
  cities: [],
  universities: [],
  departments: [],
  profiles: [],
  mentors: []
};

const getters = {
  getCities(state) {
    return state.cities;
  },

  getUniversities(state) {
    return state.universities;
  },

  getDepartments(state) {
    return state.departments;
  },

  getProfiles(state) {
    return state.profiles;
  },
  getMentor(state) {
    return state.mentors;
  }
};

const mutations = {
  updateCitiesList(state, city) {
    state.cities.push(city);
  },
  updateUniversitiesList(state, university) {
    state.universities.push(university);
  },
  updateDepartmentsList(state, department) {
    state.departments.push(department);
  },

  updateProfilesList(state, profile) {
    state.profiles.push(profile);
  },

  saveRegister(state, profile) {
    state.profiles.push(profile);
  },

  updateMentorsList(state, mentor) {
    state.mentors.push(mentor);
  },

  saveRegister(state, mentor) {
    state.mentors.push(mentor);
  }
};

export const actions = {
  // register profile
  registerProfile({ commit }, profile) {
    console.log("register profile ---->:", profile);
    return ProfileService.registerProfile(profile).then(
      response => {
        commit("saveRegister");
        console.log("resgister profile --> :", response);
        return response;
      },
      error => {
        //commit("registerFailure");
        return response;
      }
    );
  },

  registerMentor({ commit }, mentor) {
    console.log("register mentor ---->:", mentor);
    return ProfileService.registerMentor(mentor).then(
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

  async getCities({ commit }) {
    return await ProfileService.getCities().then(response => {
      let data = response.data;
      for (let key in data) {
        commit("updateCitiesList", data[key]);
      }
      return response;
    });
  },

  async getUniversities({ commit }) {
    return await ProfileService.getUniversities().then(response => {
      let data = response.data;
      for (let key in data) {
        commit("updateUniversitiesList", data[key]);
      }
      return response;
    });
  },

  async getDepartments({ commit }) {
    return await ProfileService.getDepartments().then(response => {
      let data = response.data;
      for (let key in data) {
        commit("updateDepartmentsList", data[key]);
      }
      return response;
    });
  },

  async getProfiles({ commit }, userId) {
    return await ProfileService.getProfiles(userId).then(response => {
      let data = response.data;
      for (let key in data) {
        commit("updateProfilesList", data[key]);
      }

      console.log("profile getProfiles --->:", data);
      return response;
    });
  },
  async getDepartments({ commit }) {
    return await ProfileService.getDepartments().then(response => {
      let data = response.data;
      for (let key in data) {
        commit("updateDepartmentsList", data[key]);
      }
      return response;
    });
  },

  async getMentors({ commit }) {
    return await ProfileService.getMentor().then(response => {
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
