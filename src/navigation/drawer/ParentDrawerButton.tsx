import { Image, View } from "react-native";
import DrawerButton from "../../components/DrawerButton";

interface ParentDrawerButtonProps {
  item: any;
  onItemPress: any;
  activeItems: any;
}

const ParentDrawerButton = ({ item, onItemPress, activeItems }: ParentDrawerButtonProps) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Image
        source={require("../../assets/icons/arrow-icon.png")}
        style={{
          width: 10,
          height: 10,
          resizeMode: "contain",
          position: "absolute",
          left: 20,
        }}
      />

      <DrawerButton item={item} onItemPress={onItemPress} activeItems={activeItems} isParent />
    </View>
  )
}

export default ParentDrawerButton;
