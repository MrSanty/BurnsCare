import TypeOfBurns from "../screens/TypeOfBurns/TypeOfBurns";
import LiquidBurn from "../screens/TypeOfBurns/LiquidBurn";
import FireBurn from "../screens/TypeOfBurns/FireBurn";
import ChemicalBurn from "../screens/TypeOfBurns/ChemicalBurn";
import ElectricalBurn from "../screens/TypeOfBurns/ElectricalBurn";
import FrozenBurn from "../screens/TypeOfBurns/FrozenBurn";


export const typesOfBurnsRoutes = [
  {
    key: 'Main',
    title: 'Tipos de quemaduras',
    component: TypeOfBurns
  },
  {
    key: 'Liquid',
    title: 'Líquido caliente o escaldaduras',
    component: LiquidBurn
  },
  {
    key: 'Fire',
    title: 'Quemaduras por fuego',
    component: FireBurn
  },
  {
    key: 'Chemical',
    title: 'Quemaduras por químicos',
    component: ChemicalBurn
  },
  {
    key: 'Electrical',
    title: 'Quemaduras eléctricas',
    component: ElectricalBurn
  },
  {
    key: 'Frozen',
    title: 'Quemaduras por congelación',
    component: FrozenBurn
  }
]