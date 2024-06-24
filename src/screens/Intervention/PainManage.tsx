import { FC } from "react";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import Card from "src/components/Card";

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
          <Text style={styles.title}>MANEJO</Text>
          <Text style={styles.title}>DEL DOLOR</Text>
        </View>
        <View style={styles.contentContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          >
            <Card
              title="Introducción"
              text={[
                "El dolor en personas quemadas se relaciona con trastornos sensoriales a largo plazo como parestesias, síndrome de dolor crónico y disestesias.",
                "Es de resaltar que el dolor es una sensación individual y por tal la reacción depende de cada usuario, en ocasiones puede generar depresión, ansiedad o demás trastornos psicológicos."
              ].join('\n\n')}
              isJustified
            />
            <Card title="Medios físicos">
              <Text style={styles.textFisical}>
                ● Técnicas de relajación.
              </Text>
              <Text style={styles.textFisical}>
                ● Musicoterapia.
              </Text>
              <Text style={[styles.textFisical, { textAlign: 'left' }]}>
                ● Fisioterapia dermatofuncional: Masaje cicatricial con diferentes modalidades.
              </Text>
              <Text style={styles.textFisical}>
                ● Crioterapia: Fase aguda de la quemadura donde existe inflamación y dolor. Máximo 20 min, en áreas aledañas al área lesionada.
              </Text>
              <Text style={styles.textFisical}>
                ● Termoterapia superficial: Fase subaguda. Paquete Caliente por 15 min. Tolerable al paciente.
              </Text>
            </Card>
            <Card
              title="Electroterapia"
              text={[
                "Estimulación eléctrica nerviosa transcutánea (TENS).",
                "El uso de la TENS puede contribuir con el manejo del dolor en personas quemadas, se puede usar la estimulación eléctrica en el dolor agudo a nivel sensorial, en tanto actúa sobre la transmisión en la médula espinal, y por su efecto en la estimulación de la liberación de endorfinas en el tratamiento del dolor crónico cuyos efectos y aplicaciones clínicas dependerán de la forma de la onda, la amplitud, la frecuencia, duración del pulso y tiempo de aplicación."
              ].join('\n\n')}
              isJustified
            />
          </ScrollView>
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
    alignItems: 'center',
    paddingVertical: 20
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    textAlign: 'center',
    color: '#FB0263'
  },
  contentContainer: {
    paddingHorizontal: 25,
    flex: 1
  },
  contentText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    textAlign: 'justify',
    color: '#2E2F32',
    marginBottom: 20
  },
  textFisical: {
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    textAlign: 'justify',
    color: '#2E2F32'
  },
  scroll: {
    flexGrow: 0
  }
})

export default PainManage;
