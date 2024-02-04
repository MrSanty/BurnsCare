import global from '../../styles/global';
import { RouteDrawer } from '../../types/routes';
import { useEffect, useState } from 'react';
import DrawerButton from '../../components/DrawerButton';
import { drawerRoutes } from '../../routes/drawer.routes';
import ParentDrawerButton from './ParentDrawerButton';
import { useRouteContext } from '../../hooks/useRouteContext';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const DrawerContent = () => {
  const navigation = useNavigation<any>();
  const { currentRoute, setCurrentRoute } = useRouteContext();
  const [activeItems, setActiveItems] = useState<RouteDrawer[]>([]);

  useEffect(() => {
    const listOfRoutes = drawerRoutes.filter(element => {
      return element.parent === 'Inicio';
    });

    setCurrentRoute('Definition');

    setActiveItems(listOfRoutes);
  }, []);

  const onItemPress = (item: RouteDrawer) => {
    if (updateItems(item)) {
      navigation.navigate({
        name: item.key,
        params: { previousRoute: currentRoute },
      });
      setCurrentRoute(item.key);
    }
  };

  const updateItems = (item: RouteDrawer) => {
    const filteredItems = drawerRoutes.filter(element => {
      return element.parent === item.title;
    });

    if (filteredItems.length !== 0) {
      setActiveItems(filteredItems);
      return false;
    }
    return true;
  };

  const returnToPreviousItem = (item: RouteDrawer) => {
    const resetItems = drawerRoutes.filter(e => {
      return e.parent === null;
    });

    setActiveItems(resetItems);
  };

  return (
    <LinearGradient
      colors={['#FB0362', '#FFC203']}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 1, y: 0.9 }}
      style={global.flex}
    >
      <ScrollView>
        <SafeAreaView>
          <View style={styles.logoContainer}>
            <Image source={require('../../assets/logos/logo.png')} style={styles.logo} />
          </View>

          <View style={styles.containerDrawer}>
            {activeItems[0]?.parent === null ? null : (
              <TouchableWithoutFeedback onPress={() => returnToPreviousItem(activeItems[0])}>
                <View
                  style={{
                    ...styles.button,
                    borderBottomColor: 'white',
                    borderBottomWidth: 0.5,
                    borderTopColor: 'white',
                    borderTopWidth: 0.5,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={require('../../assets/icons/arrow-icon.png')}
                    style={{
                      transform: [{ rotate: '180deg' }],
                      width: 10,
                      height: 10,
                      marginLeft: 20,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text
                    style={{
                      ...styles.textButton,
                      marginLeft: 20,
                    }}
                  >
                    {activeItems[0]?.parent}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            )}

            {activeItems[0]?.parent ? (
              <View
                style={{
                  marginHorizontal: 20,
                  width: '86%',
                  backgroundColor: '#FAF8F9',
                }}
              >
                {activeItems?.map(child => (
                  <DrawerButton
                    item={child}
                    key={child.key}
                    onItemPress={onItemPress}
                    activeItems={activeItems}
                    isChildren
                    isActive={currentRoute === child.key}
                  />
                ))}
              </View>
            ) : (
              <View style={{ width: '100%' }}>
                {activeItems?.map(route =>
                  activeItems[0]?.parent === null ? (
                    <>
                      {route.isParent ? (
                        <ParentDrawerButton
                          key={route.key}
                          item={route}
                          onItemPress={onItemPress}
                          activeItems={activeItems}
                        />
                      ) : (
                        <DrawerButton
                          key={route.key}
                          item={route}
                          onItemPress={onItemPress}
                          activeItems={activeItems}
                        />
                      )}
                    </>
                  ) : null
                )}
              </View>
            )}
          </View>

          <View style={styles.logoUamContainer}>
            <Image source={require('../../assets/logos/uam.png')} style={styles.uamImage} />
          </View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  logoContainer: {
    height: 'auto',
    alignItems: 'center'
  },
  logo: {
    width: 180,
    height: 180,
    paddingVertical: 30,
    resizeMode: 'contain'
  },
  containerDrawer: {
    width: '100%',
    height: 240,
    alignItems: 'flex-start',
    display: 'flex'
  },
  button: {
    borderTopColor: 'white',
    borderTopWidth: 0.5,
    width: '100%',
    paddingVertical: 10
  },
  textButton: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
    marginLeft: 30,
    fontSize: 13
  },
  logoUamContainer: {
    height: 'auto',
    alignItems: 'center'
  },
  uamImage: {
    width: 250,
    height: 250,
    resizeMode: 'contain'
  }
});

export default DrawerContent;
