import { createRouter, createWebHistory } from "vue-router";

// import store from "./store/store";

//routes
import LandingPage from "../pages/landingPage/LandingPage.vue";
//async routes
const DashBoard = () => import("../components/baseDashboard/DashBoard.vue");
const LoginSignUp = () => import("../pages/login/LoginSignUp.vue");
const notFound = () => import("../pages/notFound/NotFound.vue");
const PooperBowl = () =>
  import("../pages/pooperbowl/dashboard/PooperBowlDashBoard.vue");
const PooperTeamDetails = () =>
  import("../pages/pooperbowl/teamDetails/TeamDetails.vue");
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: LandingPage },
    { path: "/login", component: LoginSignUp },
    // { path: "/events", component: null },
    { path: "/events/pooperbowl", component: PooperBowl },
    { path: "/events/pooperbowl/team/:id", component: PooperTeamDetails },
    {
      path: "/events/:id",
      component: DashBoard,
      children: [{ path: "enroll", component: null }],
      props: true,
    },

    // { path: "/coaches", component: coachesList },
    // {
    //   path: "/coaches/:id", //this declared id value. see under.
    //   component: coachDetail,
    //   props: true, //the view-router will pass the id value to the child component
    //   children: [{ path: "contact", component: contactCoach }],
    // },
    // {
    //   path: "/register",
    //   component: coachRegistration,
    //   meta: { requiresAuth: true },
    // },
    // {
    //   path: "/requests",
    //   component: requestsRecieved,
    //   meta: { requiresAuth: true },
    // },
    // { path: "/auth", component: userAuth },
    {
      path: "/:notfound(.*)",
      component: notFound,
      // meta: { requiresUnauth: true },
    },
  ],
});

// router guard
// router.beforeEach(function (to, _, next) {
//   if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
//     next("/auth");
//   } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
//     next("/coaches");
//   } else {
//     next();
//   }
// });

export default router;
