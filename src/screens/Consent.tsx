import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { View, ImageBackground, Image, Text, StyleSheet, StatusBar, BackHandler, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonGradient from 'src/components/ButtonGradient';

const Consent = () => {
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.flexContainer}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FAF8F9"
        translucent
      />
      <View style={styles.flexContainer}>
        <ImageBackground
          source={require('src/assets/images/background.jpg')}
          style={styles.container}
        >
          <View style={styles.containerContent}>
            <ScrollView
              style={styles.scroll}
            >
              <Text style={styles.title}>
                BURNSCARE:
              </Text>

              <Text style={styles.contentText}>
                Esta aplicación móvil se recomienda para el uso de fisioterapeutas y personal de salud que trabaja con personas quemadas para el proceso de intervención desde sus diferentes etapas de recuperación.
                {'\n'}
              </Text>
              <Text style={styles.title}>
                Descargos:
              </Text>
              <Text style={styles.contentText}>
                Yo entiendo que he usado esta aplicación intentando identificar de acuerdo a la mejor evidencia disponible las opciones de examen e intervención utilizadas para personas con quemaduras en sus diferentes etapas de recuperación. Estas recomendaciones son fundamentadas en investigación científica y que mi uso y aplicación de estas recomendaciones la debo seguir al pie de la letra y que se debe considerar el juicio clínico profesional, los factores contextuales, la fundamentación previa de quien lo utilice y los recursos disponibles antes de tomar una decisión de su uso.
                {'\n'}{'\n'}
                También comprendo que cualquier procedimiento realizado de manera inadecuada excluye a los investigadores, desarrolladores de la app y a la institución sobre daños o alguna lesión que produzca alguna limitación directa o indirecta, punitiva, incidental o como consecuencia de la inadecuada interpretación o uso de la información.
                {'\n'}{'\n'}
                Yo entiendo el uso y las limitaciones de la app de quemados BurnsCare.
              </Text>

              <View
                style={{
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                <ButtonGradient
                  text='Aceptar'
                  onPress={() => navigation.navigate('Introduction')}
                />
                <ButtonGradient
                  text='Rechazar'
                  onPress={() => BackHandler.exitApp()}
                />
              </View>
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
  },
  container: {
    flex: 1
  },
  title: {
    fontFamily: 'Poppins-Bold',
    color: '#2E2F32',
    marginBottom: 10,
    fontSize: 18,
  },
  containerContent: {
    paddingVertical: 30,
    flex: 1,
    paddingHorizontal: 20
  },
  contentText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 25,
    color: 'black'
  },
  scroll: {
    flexGrow: 0,
  },
});

export default Consent;
