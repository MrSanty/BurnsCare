import { RecommendationsRoutes } from 'src/routes/Recommendations.routes';
import DrawerScreenHeader from 'src/components/DrawerScreenHeader';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const { Navigator, Screen } = createNativeStackNavigator();

const StackRecommendation = () => {
  return (
    <Navigator
      screenOptions={{
        header: props => <DrawerScreenHeader />
      }}
      initialRouteName="Index"
    >
      {
        RecommendationsRoutes.map((route) => (
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
export default StackRecommendation;
