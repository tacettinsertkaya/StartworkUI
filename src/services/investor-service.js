import httpClient from "../services/httpClient";

const API_INVESTOR_URL = "http://localhost:4000/api/investor/";

class InvestorService {
 

  registerInvestor(investor) {
    return httpClient.post(API_INVESTOR_URL + "save-investor", {
      id: investor.id,
      isInvesment: investor.isInvesment,
      portfoyId: investor.portfoyId,
      isStatus: investor.isStatus,
      isSector: investor.isSector,
      destinationSectorId: investor.destinationSectorId,
      isInvestmentStep: investor.isInvestmentStep,
      investmentStepIds: investor.investmentStepIds,
      updatedAt: investor.updatedAt,
      createdAt:investor.createdAt
    });
  }

  

  async getInvestor(userId) {
    return await httpClient
      .get(API_INVESTOR_URL + "get-investor/"+userId)
      .then(response => {
       // console.log("profile-investor investor  --->:", response.data);
        return response;
      });
  }

}

export default new InvestorService();
