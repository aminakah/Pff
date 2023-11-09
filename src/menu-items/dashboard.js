// assets
import { DashboardOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'Dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.DashboardOutlined,
      breadcrumbs: true
    },
    {
      id: 'listePharmacie',
      title: 'liste de Pharmacie',
      type: 'item',
      url: '/listePharmacie',
      icon: icons.DashboardOutlined,
      breadcrumbs: true
    },
    {
      id: 'Acceuilm',
      title: 'liste des Utlisateur',
      type: 'item',
      url: '/listeUtlisateur',
      icon: icons.DashboardOutlined,
      breadcrumbs: true
    },
    {
      id: 'n',
      title: 'pharmacie',
      type: 'item',
      url: '/pharmacie',
      icon: icons.DashboardOutlined,
      breadcrumbs: true
    }
  ]
};

export default dashboard;
