import ProfileService from "../../services/profile-service";

export const state = {
  cities: [],
  schools: [],
  departments: []
};

const getters = {
  getCities(state) {
    return state.cities;
  },

  getSchools(state){
      return state.schools;
  },

  getDepartments(state){
      return state.departments;
  }
};

const mutations = {
  updateCitiesList(state, city) {
    state.cities.push(city);
  }
,
  updateSchoolsList(state,school){
    state.schools.push(school);
  },
  updateDepartmentsList(state,department){
      state.departments.push(department);
  }
};

export const actions = {
  async getCities({ commit }) {
    return await ProfileService.getCities()
    .then(response => {
      let data = response.data;
      for (let key in data) {
        commit("updateCitiesList", data[key]);
      }
      return response;
    });
  },

  async getSchools({commit}){
      return await ProfileService.getSchools()
      .then(
          response =>{
            let data = response.data;
              for(let key in data){
                  commit("updateSchoolsList",data[key])
              }
              return response;
          }
      )
  },
  async getDepartments({commit}){
    return await ProfileService.getDepartments()
    .then(
        response =>{
          let data = response.data;
            for(let key in data){
                commit("updateDepartmentsList",data[key])
            }
            return response;
        }
    )
},

};

export default {
  state,
  getters,
  mutations,
  actions
};
