import Vue from "vue";
import Router from "vue-router";
import { store } from "../store/store";

import Layout from "@/components/pages/layout";
import ResetEmail from "@/components/pages/resetpassword/reset-email";
import ResetPassword from "@/components/pages/resetpassword/resetpassword";
import Dashboard from "@/components/pages/dashboard";
import Student from "@/components/pages/student/student";
import Wizard from "@/components/pages/wizard/wizard";
import Reports from "@/components/pages/reports/reports";
import Settings from "@/components/pages/settings/settings";
import Login from "@/components/pages/login/login";
import Signup from "@/components/pages/signup/signup";
import Profile from "@/components/pages/profile/profile";
import Apply from "@/components/pages/apply/apply";
import Network from "@/components/pages/network/network";
import Discussion from "@/components/pages/discussion/discussion";
import Work from "@/components/pages/work/work";
import Ecosystem from "@/components/pages/ecosystem/ecosystem";
import Event from "@/components/pages/event/event";
import AccountProfile from "@/components/pages/profile/account-profile";
import AccountProfileHomepage from "@/components/pages/profile/account-profile-homepage";
import PersonSetsInvestment from "@/components/pages/profile/person-sets-investment";
import PersonSetsMentor from "@/components/pages/profile/person-sets-mentor";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/signup",
      name: "signup",
      component: Signup
    },
    // this.$store.getters.movies
    {
      path: "/",
      component: Layout,
      beforeEnter: (to, from, next) => {
        console.log("store.getters.isAuth", store.getters.isAuth);
        if (store.getters.isAuth) {
          next();
        } else {
          next({ path: "/login" });
        }
      },
      children: [
        {
          path: "dashboard",
          name: "dashboard",
          component: Dashboard
        },
        {
          path: "profile",
          name: "profile",
          component: Profile
        },
        {
          path: "apply",
          name: "apply",
          component: Apply
        },
        {
          path: "network",
          name: "network",
          component: Network
        },
        {
          path: "discussion",
          name: "discussion",
          component: Discussion
        },
        {
          path: "work",
          name: "work",
          component: Work
        },
        {
          path: "ecosystem",
          name: "ecosystem",
          component: Ecosystem
        },
        {
          path: "event",
          name: "event",
          component: Event
        },
        {
          path: "settings",
          name: "settings",
          component: Settings
        },
        {
          path: "/account",
          name: "account",
          component: AccountProfileHomepage,
          children: [
            {
              path: "profile",
              name: "profile",
              component: AccountProfile
            },
            {
              path: "investment",
              name: "investment",
              component: PersonSetsInvestment
            },
            {
              path: "mentor",
              name: "mentor",
              component: PersonSetsMentor
            }
          ]
        }
      ]
    },
    {
      path: "/reset-email",
      name: "reset-email",
      component: ResetEmail
    },
    {
      path: "/reset-password/:token",
      name: "reset-password",
      component: ResetPassword
    }
  ]
});
