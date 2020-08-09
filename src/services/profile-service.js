import httpClient from "../services/httpClient";

const API_URL = "http://localhost:4000/api/profile/";
const API_MENTOR_URL = "http://localhost:4000/api/profile/";

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
  }


  registerMentor(mentor) {
    return httpClient.post(API_MENTOR_URL + "save-mentor", {
      id: mentor.id,
      isInvesment: mentor.isInvesment,
      portfoyId: mentor.portfoyId,
      isStatus: mentor.isStatus,
      isSector: mentor.isSector,
      destinationSectorId: mentor.destinationSectorId,
      isInvestmentStep: mentor.isInvestmentStep,
      investmentStepIds: mentor.investmentStepIds,
      updatedAt: mentor.updatedAt
    });
  }

  async getProfiles(userId) {
    console.log("gelen userId-------->:",userId);
    return await httpClient.get(API_URL + "get-profile/"+userId).then(response => {
      console.log("profile-service getProfiles  --->:",response.data);

      return response;
    });
  }

  async getMentor() {
    return await httpClient
      .get(API_MENTOR_URL + "get-mentor")
      .then(response => {
        console.log("profile-mentor mentor  --->:", response.data);
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
