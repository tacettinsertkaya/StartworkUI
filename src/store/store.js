import Vue from "vue";
import Vuex from "vuex";

import Auth from "./modules/auth";
import User from "./modules/user";
import Profile from "./modules/profile";
import Mentor from "./modules/mentor";
import Investor from "./modules/investor";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    Auth,
    User,
    Profile,
    Mentor,
    Investor
  }
});
