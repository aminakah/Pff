/* eslint-disable prettier/prettier */
import { lazy } from 'react';
// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import AcceuilUser from 'pages/pageUser/acceuil';
// import PharmacieChoisi from 'pages/pageUser/PharmacieChoisi';
import AjouterPharmacie from 'pages/pageAdmin/AjouterPharmacie';
import ListePharmacie from 'pages/pageAdmin/ListePharmacie';
import ModifierPharmacie from 'pages/pageAdmin/ModifierPharmacie';
import ListeUser from 'pages/pageAdmin/ListeUser';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page

// render - utilities
// const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <AcceuilUser />
    },
    {
      path: '/acceuil',
      element: <AcceuilUser />
    },
    {
      path: '/listePharmacie',
      element: <ListePharmacie />
    },
    {
      path: '/AjouterPharmacie',
      element: <AjouterPharmacie />
    },
    {
      path: '/ModifierPharmacie',
      element: <ModifierPharmacie />
    },
    {
      path: '/listeUtlisateur',
      element: <ListeUser />
    },
    
   
   
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        },
       

      ]
    },
   
  ]
};

export default MainRoutes;
