import { Component } from "react";
import { ROUTERS } from "./utils/router"
import { Routes,Route } from "react-router-dom";
import MasterLayout from "./page/users/theme/masterLayout";
import HomePage from "./page/users/homePage";
import ProfilePage from "./page/users/profilePage";

const renderUserRouter = () => {
  const userRouters = [
    {
      path: ROUTERS.USER.HOME,
      component: <HomePage />,
    },
    {
      path: ROUTERS.USER.PROFILE,
      component: <ProfilePage />,
    },
  ];

  return (
    <MasterLayout>
    <Routes>
      {userRouters.map((item, key) => (
      <Route key={key} path={item.path} element={item.component} />
      ))}
    </Routes>
    </MasterLayout>
  );
};

const RouterCustom = () => {
  return renderUserRouter();
};
export default RouterCustom;
