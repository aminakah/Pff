// assets
/* eslint-disable prettier/prettier */

import { LoginOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  LoginOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const acceuil = {
  id: 'accueil',
  title: 'accueil',
  type: 'group',
  children: [
    {
      id: 'login1',
      title: 'Accueil',
      type: 'item',
      url: '/myFriend',
      icon: icons.LoginOutlined,
      target: true
    },
    {
        id: 'login1',
        title: 'Accueil',
        type: 'item',
        url: '/accueil',
        icon: icons.LoginOutlined,
        target: true
      },
   
  ]
};

export default acceuil;
