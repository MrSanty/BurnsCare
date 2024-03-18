import Definition from "src/screens/Definition";
import { RouteDrawer, RouteDrwerScreen } from "src/types/routes";
import Complications from "src/screens/Complications";
import References from "src/screens/References";
import InterestedPage from "src/screens/InterestedPage";
import AboutUs from "src/screens/AboutUs";
import StackControlMonitoring from "src/navigation/stack/StackControlMonitoring";

export const drawerRoutes: RouteDrawer[] = [
  {
    key: 1,
    title: 'Inicio',
    children: null,
    show: true,
    
  },
  {
    key: 2,
    title: 'Complicaciones de las quemaduras',
    children: null,
    show: true
  },
  {
    key: 3,
    title: 'Control y seguimiento',
    children: null,
    show: true
  },
  {
    key: 10,
    title: 'Referencias',
    children: null,
    show: true
  },
  {
    key: 11,
    title: 'Páginas de interés',
    children: null,
    show: true
  },
  {
    key: 12,
    title: 'Acerca de',
    children: null,
    show: true
  }
]

export const drawerScreenRoutes: RouteDrwerScreen[] = [
  {
    key: 1,
    title: 'Inicio',
    component: Definition,
    showHeader: true
  },
  {
    key: 5,
    title: 'Complicaciones de las quemaduras',
    component: Complications,
    showHeader: true
  },
  {
    key: 3,
    title: 'Control y seguimiento',
    component: StackControlMonitoring,
    showHeader: false
  },
  {
    key: 10,
    title: 'Referencias',
    component: References,
    showHeader: true
  },
  {
    key: 11,
    title: 'Páginas de interés',
    component: InterestedPage,
    showHeader: true
  },
  {
    key: 12,
    title: 'Acerca de',
    component: AboutUs,
    showHeader: true
  }
]