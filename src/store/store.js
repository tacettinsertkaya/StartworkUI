import Vue from "vue";
import Vuex from "vuex";

import Auth from "./modules/auth";
import User from "./modules/user";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    Auth,
    User,
  }
});
