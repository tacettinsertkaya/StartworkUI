import httpClient from "../services/httpClient";

const API_MENTOR_URL = "http://localhost:4000/api/mentor/";

class MentorService {
 

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
      updatedAt: mentor.updatedAt,
      createdAt:mentor.createdAt
    });
  }

  

  async getMentor(userId) {
    return await httpClient
      .get(API_MENTOR_URL + "get-mentor/"+userId)
      .then(response => {
        console.log("profile-mentor mentor  --->:", response.data);
        return response;
      });
  }

}

export default new MentorService();
