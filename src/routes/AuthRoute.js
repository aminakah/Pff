/* eslint-disable prettier/prettier */


// import { lazy } from 'react';

// project import
// import Loadable from 'components/Loadable';
// import MinimalLayout from 'layout/MinimalLayout';
import AcceuilUser from 'pages/pageUser/acceuil';
import Icon from "@mui/material/Icon";

// render - login
// const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
// const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const AuthRoutes = 
//   path: '/',
//   element: <MinimalLayout />,
//   children: [
//     {
//       path: 'login',
//       element: <AuthLogin />
//     },
//     {
//       path: 'register',
//       element: <AuthRegister />
//     }
//   ]

  [ {
    type: "collapse",
    name: "mes amis",
    key: "MyFriend",
    icon: <Icon fontSize="small">article</Icon>,
    route: "/myFriend",
    component:<AcceuilUser/> ,
  }];


export default AuthRoutes;
