import { FC } from "react";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { useNavigationChange } from 'src/hooks/useNavigationChange';

interface Props {
  navigation: any;
}

const PainManage: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('src/assets/images/background.jpg')}
        style={styles.container}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>EJERCICIO</Text>
          <Text style={styles.title}>TERAPÉUTICO</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.scroll}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.scroll}
            >
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Medios físicos</Text>
                <Text style={styles.cardText}>
                  ● Técnicas de relajación.{"\n"}
                  ● Musicoterapia.{"\n"}
                  ● Fisioterapia dermatofuncional: Masaje cicatricial con diferentes modalidades.{"\n"}
                  ● Crioterapia: Fase aguda de la quemadura donde existe inflamación y dolor. Máximo 20 min.{"\n"}
                  ● Termoterapia superficial: Fase subaguda. Paquete Caliente por 15 min. Tolerable al paciente.
                </Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Electroterapia</Text>
                <Text style={styles.cardText}>
                  Estimulación eléctrica nerviosa transcutánea (TENS).{"\n"}
                  El uso de la TENS puede contribuir con el manejo del dolor en personas quemadas, se puede usar la estimulación eléctrica en el dolor agudo a nivel sensorial, en tanto actúa sobre la transmisión en la médula espinal, y por su efecto en la estimulación de la liberación de endorfinas en el tratamiento del dolor crónico.cuyos efectos y aplicaciones clínicas dependerán de la forma de la onda, la amplitud, la frecuencia, duración del pulso y tiempo de aplicación.
                </Text>
              </View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    paddingTop: 30,
    alignItems: 'center',
    marginBottom: 30
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    textAlign: 'center',
    color: '#FB0263'
  },
  contentContainer: {
    paddingHorizontal: 25
  },
  contentText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    textAlign: 'justify',
    color: '#2E2F32',
    marginBottom: 20
  },
  scroll: {
    width: '100%',
    maxHeight: '96%'
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.4)',
    marginBottom: 20
  },
  cardTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: '#FB0263',
    marginBottom: 10
  },
  cardText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    color: '#2E2F32'
  }
})

export default PainManage;
