import { InterventionGuidelinesRoutes } from 'src/routes/InterventionGuidelines.routes';
import DrawerScreenHeader from 'src/components/DrawerScreenHeader';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const { Navigator, Screen } = createNativeStackNavigator();

const StackInterventionGuidelines = () => {
  return (
    <Navigator
      screenOptions={{
        header: props => <DrawerScreenHeader />
      }}
      initialRouteName="Index"
    >
      {
        InterventionGuidelinesRoutes.map((route) => (
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
export default StackInterventionGuidelines;
