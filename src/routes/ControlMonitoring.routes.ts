import ControlMonitoring from "src/screens/ControlAndMonitoring/ControlMonitoring";
import TherapeuticExercise from "src/screens/ControlAndMonitoring/TherapeuticExercise";
import ScarManage from "src/screens/ControlAndMonitoring/ScarManage";
import PainManage from "src/screens/ControlAndMonitoring/PainManage";


export const ControlMonitoringRoutes = [
  {
    key: 'Index',
    title: 'Index',
    component: ControlMonitoring
  },
  {
    key: 'Therapeutic',
    title: 'Ejercicios terapéuticos',
    component: TherapeuticExercise
  },
  {
    key: 'Scars',
    title: 'Manejo de cicatrices',
    component: ScarManage
  },
  {
    key: 'Pains',
    title: 'Manejo del dolor',
    component: PainManage
  }
]