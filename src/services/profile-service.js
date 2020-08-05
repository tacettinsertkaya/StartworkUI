import httpClient from "../services/httpClient";

const API_URL = "http://localhost:4000/api/profile/";

class ProfileService {
  async getCities() {
    return await httpClient.get(API_URL + "cities").then(response => {
      return response;
    });
  }

  async getSchools(){
      return await httpClient.get(API_URL+"schools")
      .then(response =>{
          return response;
      })
  }

  async getDepartments(){
    return await httpClient.get(API_URL+"departments")
    .then(response =>{
        return response;
    })
}
}

export default new ProfileService();
