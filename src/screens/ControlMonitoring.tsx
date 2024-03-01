import { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigationChange } from 'src/hooks/useNavigationChange';

interface Props {
  navigation: any;
}

const ControlMonitoring: FC<Props> = ({ navigation }) => {
  useNavigationChange(navigation, 3);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>CONTROL</Text>
        <Text style={styles.title}>Y SEGUIMIENTO</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    padding: 20,
    alignItems: 'center',
    marginBottom: 30
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    textAlign: 'center',
    color: '#FB0263'
  }
}) 

export default ControlMonitoring