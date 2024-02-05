import { RouteDrawer } from "src/types/routes";
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";

interface DrawerParentButtonProps {
  returnToPreviousItem: (item: RouteDrawer) => void;
  updateItems: (item: RouteDrawer) => boolean;
  item: RouteDrawer;
  isActive: boolean;
}

const DrawerParentButton = ({ returnToPreviousItem, updateItems, item, isActive }: DrawerParentButtonProps) => {

  const handlePress = () => {
    if (isActive) {
      returnToPreviousItem(item)
    } else {
      updateItems(item)
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={handlePress}
    >
      <View
        style={styles.button}
      >
        <Image
          source={require('src/assets/icons/arrow-icon.png')}
          style={[ styles.iconArrow, isActive && styles.iconArrowActive ]}
        />
        <Text
          style={styles.textButton}
        >
          {
            isActive 
              ? item?.parent
              : item?.title
          }
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 0.5,
    borderTopColor: 'white',
    borderTopWidth: 0.5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconArrowActive: {
    transform: [{ rotate: '180deg' }]
  },
  iconArrow: {
    width: 10,
    height: 10,
    marginLeft: 20,
    resizeMode: 'contain'
  },
  textButton: {
    fontFamily: 'Poppins-Bold',
    color: 'white',
    marginLeft: 20,
    fontSize: 13
  },
});

export default DrawerParentButton;