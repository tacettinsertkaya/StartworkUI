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
          path: "student",
          name: "student",
          component: Student
        },
        {
          path: "wizard",
          name: "wizard",
          component: Wizard
        },
        {
          path: "reports",
          name: "reports",
          component: Reports
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
