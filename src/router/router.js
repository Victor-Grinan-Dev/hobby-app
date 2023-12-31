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
const OurEvents = () => import("../pages/events/OurEvents.vue");
const OurProducts = () => import("../pages/products/OurProducts.vue");
const MyProfile = () => import("../pages/profile/MyProfile.vue");
const JoinUs = () => import("../pages/join/JoinUs.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: LandingPage },
    { path: "/login", component: LoginSignUp },
    { path: "/events", component: OurEvents },
    { path: "/products", component: OurProducts },
    { path: "/profile", component: MyProfile },
    { path: "/joinUs", component: JoinUs },
    {
      path: "/events/pooperbowl",
      component: PooperBowl,
      // children: [
      //   { path: "feed", component: null },
      //   { path: "leaderboard", component: null },
      //   { path: "teams", component: null },
      //   { path: "fixtures", component: FixturesTable },
      // ],
    },
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
  scrollBehavior() {
    return { top: 0 };
  },
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
