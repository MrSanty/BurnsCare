import Recommendations from "src/screens/Recommendations/Recommendations";
import TherapeuticExercise from "src/screens/Recommendations/TherapeuticExercise";
import ScarManage from "src/screens/Recommendations/ScarManage";
import PainManage from "src/screens/Recommendations/PainManage";


export const RecommendationsRoutes = [
  {
    key: 'Index',
    title: 'Index',
    component: Recommendations
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