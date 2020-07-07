import Vue from "vue";
import Router from "vue-router";

import Layout from "@/components/pages/layout";

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
      path: "/",
      component: Layout,
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
          path: "*",
          redirect: "login"
        }
      ]
    }
  ]
});
