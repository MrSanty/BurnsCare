import { typesOfBurnsRoutes } from '../../routes/typesOfBurns.routes';
import DrawerScreenHeader from '../../navigation/drawer/DrawerScreenHeader';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const { Navigator, Screen } = createNativeStackNavigator();

const StackTypeOfBurns = () => {
  return (
    <Navigator
      screenOptions={{
        header: props => <DrawerScreenHeader />
      }}
      initialRouteName="Main"
    >
      {
        typesOfBurnsRoutes.map((route) => (
          <Screen
            key={route.key}
            name={route.title}
            component={route.component}
          />
        ))
      }
    </Navigator>
  );
};
export default StackTypeOfBurns;
