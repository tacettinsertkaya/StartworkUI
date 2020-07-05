import { ApiURL } from '../../utility/endpoint'
import httpClient from '../../services/httpClient'
import Axios from 'axios';
export const state = {
    studentUser:{
        error: false,
        result: {
            code:0,
            result:'',
            important: false,
            tr:'',
            en: ''
        },
        data: {
            userData: {
                id: 0,
                idDetail: '',
                institutionCode:'',
                type: 0,
                companyID: 0,
                mail: ''
            },
            period: {
                id: 0,
                periodVcode: '',
                periodName:  '',
                periodStatus: 0
            }
        }
    }
}

export const getters = {

}

export const mutations={
    setToken(state, userData) {
        state.studentUser = userData;
    }
}

export const actions = {
    login({ commit, dispatch, state }, authData) {
        let authLink = ApiURL.studentLogin;
        console.log("authData",authData);
        console.log("this.httpClient",httpClient);
        return  httpClient.post(authLink, authData)
                .then(response => {

                console.log("response",response);

                commit("setUserInfo", response);
                return response;
            })
            .catch(response => {
                console.log("error-response",response);
                return response;
            });

       
    }
}

export default{
    state,
    getters,
    mutations,
    actions
}

