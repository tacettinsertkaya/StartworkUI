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
import Confirm from "@/components/pages/confirm-account/confirm-account";
import Signup from "@/components/pages/signup/signup";
import AccountProfile from "@/components/pages/profile/account-profile";
import Apply from "@/components/pages/apply/apply";
import Network from "@/components/pages/network/network";
import Discussion from "@/components/pages/discussion/discussion";
import Work from "@/components/pages/work/work";
import Ecosystem from "@/components/pages/ecosystem/ecosystem";
import Event from "@/components/pages/event/event";
import ProfileSettings from "@/components/pages/profile/settings/profile-settings";
import AccountSettingsHomepage from "@/components/pages/profile/settings/account-settings-homepage";
import InvestmentSettings from "@/components/pages/profile/settings/investment-settings";
import MentorSettings from "@/components/pages/profile/settings/mentor-settings";

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
    {
      path: "/confirm/:token",
      name: "confirm",
      component: Confirm
    },
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
          path: "account-profile",
          name: "accountProfile",
          component: AccountProfile
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
          path: "account-settings-homepage",
          name: "accountSettingsHomepage",
          component: AccountSettingsHomepage,
          children: [
            {
              path: "profile-settings",
              name: "profile",
              component: ProfileSettings
            },
            {
              path: "investment-settings",
              name: "investment",
              component: InvestmentSettings
            },
            {
              path: "mentor-settings",
              name: "mentor",
              component: MentorSettings
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
