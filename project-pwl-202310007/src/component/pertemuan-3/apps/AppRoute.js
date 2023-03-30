import React from "react";
import { Route, Routes } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Home from "../modules/components/Homes/Home";
import Explore from "../modules/components/Explore/Explore";
import Messages from "../modules/components/Messages/Messages";
import Feeds from "../modules/components/Explore/widgets/Feeds";
import Reels from "../modules/components/Explore/widgets/Reels";
import FYP from "../modules/components/Explore/widgets/FYP";
import Profiles from "../modules/components/Profiles/Profiles";
import Error from "../layouts/components/404/Error";
import Login from "../layouts/components/Login/Login";

export default function AppRoute() {
  const routes = [
    {
      path: "/Home",
      component: Home,
    },
    {
      path: "/explore",
      component: Explore,
      children: [
        { path: "feeds", component: Feeds },
        { path: "reels", component: Reels },
        { path: "fyp", component: FYP },
      ],
    },
    {
      path: "/Messages",
      component: Messages,
    },
    {
      path: "/Profiles",
      component: Profiles,
    },
  ];
  return (
    <Routes>
      <Route
        index
        element={
          <Layouts>
            <Home />
          </Layouts>
        }
      />

      <Route
        path="home"
        element={
          <Layouts>
            <Home />
          </Layouts>
        }
      />
      {routes.map((e, index) =>
        e.children ? (
          <Route
            path={e.path}
            element={
              <Layouts>
                <e.component />
              </Layouts>
            }
            key={index}
          >
            {e.children.map((i, index) => (
              <Route path={i.path} element={<i.component />} key={index} />
            ))}
          </Route>
        ) : (
          <Route
            path={e.path}
            element={
              <Layouts>
                <e.component />
              </Layouts>
            }
            key={index}
          />
        )
      )}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
