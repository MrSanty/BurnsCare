import Definition from "src/screens/Definition";
import Clasification from "src/screens/Clasification/Clasification";
import { RouteDrawer, RouteDrwerScreen } from "src/types/routes";
import References from "src/screens/References";
import InterestedPage from "src/screens/InterestedPage";
import BurnCases from "src/screens/BurnCases";
import TherapeuticExercise from "src/screens/TherapeuticExercise";
import ScarManage from "src/screens/ScarManage";
import PainManage from "src/screens/PainManage";
import AboutUs from "src/screens/AboutUs";
import Exam from "src/screens/Exam";

export const drawerRoutes: RouteDrawer[] = [
  {
    key: 1,
    title: 'Inicio',
    children: [
      {
        key: 2,
        title: 'Definición',
        children: null,
        show: true
      },
      {
        key: 4,
        title: 'Clasificación',
        children: null,
        show: true
      },
      {
        key: 5,
        title: 'Causas de las quemaduras',
        children: null,
        show: true
      }
    ],
    show: true,
    
  },
  {
    key: 3,
    title: 'Pautas de intervención',
    children: [
      {
        key: 6,
        title: 'Ejercicio terapéutico',
        children: null,
        show: true
      },
      {
        key: 7,
        title: 'Manejo de la cicatriz',
        children: null,
        show: true
      },
      {
        key: 8,
        title: 'Manejo del dolor',
        children: null,
        show: true
      }
    ],
    show: true
  },
  {
    key: 9,
    title: 'Examen',
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
    key: 2,
    title: 'Definición',
    component: Definition,
    showHeader: true
  },
  {
    key: 4,
    title: 'Clasificación',
    component: Clasification,
    showHeader: true
  },
  {
    key: 5,
    title: 'Causas de las quemaduras',
    component: BurnCases,
    showHeader: true
  },
  {
    key: 6,
    title: 'Ejercicio terapéutico',
    component: TherapeuticExercise,
    showHeader: true
  },
  {
    key: 7,
    title: 'Manejo de la cicatriz',
    component: ScarManage,
    showHeader: true
  },
  {
    key: 8,
    title: 'Manejo del dolor',
    component: PainManage,
    showHeader: true
  },
  {
    key: 9,
    title: 'Examen',
    component: Exam,
    showHeader: true
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