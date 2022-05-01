import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import { useDispatch } from "react-redux";
import { aboutMeAsync } from "./features/auth/authSlice";
import NewsComponent from "./pages/News";
import LoaderContainer from "./components/containers/LoaderContainer";
import NotificationContainer from "./components/containers/NotificationContainer";
import DefaultFooter from "./components/DefaultFooter";
import Skills from "./pages/Skills";
import ViewSkill from "./pages/ViewSkill";
import Trainers from "./pages/Trainers";
import NewsFeed from "./pages/NewsFeed";
import RouteList from "./pages/RouteList";
import ViewCRag from "./pages/ViewCrag";
import Events from "./pages/Events";
import Forum from "./pages/Forum";
import ViewTopic from "./components/forum/ViewTopic";
import ViewTopicPost from "./components/forum/ViewTopicPost";
import FAQ from "./pages/FAQ";
import ViewFeedPost from "./pages/ViewFeedPost";
import SecureRoute from "./components/security/SecureRoute";
import ViewUserProfile from "./pages/ViewUserProfile";

const routes = [
  {
    path: "/",
    component: Landing,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/profile",
    component: Profile,
    privateRoute: true,
    routeName: "Profile",
  },
  {
    path: "/profile/:id",
    component: ViewUserProfile,
  },
  {
    path: "/skills",
    component: Skills,
  },
  {
    path: "/skills/:id",
    component: ViewSkill,
  },
  {
    path: "/settings",
    component: Settings,
  },
  {
    path: "/news",
    component: NewsComponent,
  },
  {
    path: "/trainers",
    component: Trainers,
  },
  {
    path: "/newsfeed",
    component: NewsFeed,
  },
  {
    path: "/newsfeed/:id",
    component: ViewFeedPost,
  },
  {
    path: "/areas/:city/routelist/:id",
    component: ViewCRag,
  },
  {
    path: "/areas/:city/routelist",
    component: RouteList,
  },
  {
    path: "/events",
    component: Events,
  },
  {
    path: "/forum/:id/:postId",
    component: ViewTopicPost,
  },
  {
    path: "/forum/:id",
    component: ViewTopic,
  },
  {
    path: "/forum",
    component: Forum,
  },
  {
    path: "/faq",
    component: FAQ,
  },
];

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(aboutMeAsync());
  });

  return (
    <>
      <Switch>
        {routes.map(
          (
            {
              privateRoute = false,
              routeName = "",
              path,
              component: RouteComponent,
            },
            index
          ) => (
            <Route key={index} exact path={path}>
              <SecureRoute privateRoute={privateRoute} routeName={routeName}>
                <RouteComponent />
              </SecureRoute>
            </Route>
          )
        )}
        <Redirect from="*" to="/" />
      </Switch>
      <LoaderContainer />
      <NotificationContainer />
      <DefaultFooter />
    </>
  );
};

export default App;
