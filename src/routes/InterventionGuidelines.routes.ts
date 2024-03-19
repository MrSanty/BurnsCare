import InterventionGuidelines from "src/screens/Intervention/InterventionGuidelines";
import TherapeuticExercise from "src/screens/Intervention/TherapeuticExercise";
import ScarManage from "src/screens/Intervention/ScarManage";
import PainManage from "src/screens/Intervention/PainManage";
import TypesTherapeutic from "src/screens/Intervention/TypesTherapeutic";
import SpecialAreas from "src/screens/Intervention/SpecialAreas";


export const InterventionGuidelinesRoutes = [
  {
    key: 'Index',
    title: 'Index',
    component: InterventionGuidelines
  },
  {
    key: 'SpecialAreas',
    title: 'Quemaduras en áreas especiales',
    component: SpecialAreas
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
  }, 
  {
    key: 'Types',
    title: 'Tipos de ejercicios terapéuticos',
    component: TypesTherapeutic
  }
]