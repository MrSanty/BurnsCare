import { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import Introduction from './screens/Introduction';
import NavigationDrawer from './navigation/drawer/NavigationDrawer';
import { RouteContext } from './context/RouteProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

const App = () => {
  const [currentRoute, setCurrentRoute] = useState('Introduction');

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  });

  return (
    <RouteContext.Provider value={{ currentRoute, setCurrentRoute }}>
      <NavigationContainer>
        <Navigator
          initialRouteName="Introduction"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen name="Introduction" component={Introduction} />
          <Screen name="Main" component={NavigationDrawer} />
        </Navigator>
      </NavigationContainer>
    </RouteContext.Provider>
  );
};

export default App;