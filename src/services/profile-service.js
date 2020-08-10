import httpClient from "../services/httpClient";

const API_URL = "http://localhost:4000/api/profile/";

class ProfileService {
  
  registerProfile(profile) {
    return httpClient.post(API_URL + "save-profile", {
      id: profile.id,
      nameSurname: profile.nameSurname,
      createdAt: profile.membershipDate,
      username: profile.username,
      countryId: profile.countryId,
      city: profile.city,
      email: profile.email,
      website: profile.website,
      linkedin: profile.linkedin,
      twitter: profile.twitter,
      department: profile.department,
      university: profile.university,
      experienceId: profile.experienceId,
      companyId: profile.companyId,
      biography: profile.biography,
      profileTags: profile.profileTags,
      skillId: profile.skillId,
      callingId: profile.callingId
    });
    console.log("profile service profiles --->:",profile);
  }





  async getProfiles(userId) {
    return await httpClient.get(API_URL + "get-profile/"+userId).then(response => {
      return response;
    });
  }

 

  async getCities() {
    return await httpClient.get(API_URL + "cities").then(response => {
      return response;
    });
  }

  async getUniversities() {
    return await httpClient.get(API_URL + "universities").then(response => {
      return response;
    });
  }

  async getDepartments() {
    return await httpClient.get(API_URL + "departments").then(response => {
      return response;
    });
  }
}

export default new ProfileService();
