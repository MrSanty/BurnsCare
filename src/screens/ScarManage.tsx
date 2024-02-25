import { FC } from "react";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import AccordionText from "src/components/AccordionText";
import { useNavigationChange } from 'src/hooks/useNavigationChange';

interface Props {
  navigation: any;
}

const ScarManage: FC<Props> = ({ navigation }) => {
  useNavigationChange(navigation, 7);

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
            <AccordionText
              title="Tecnicas dermato funcionales"
              text="El entrenamiento funcional se basa en ejercicios para mejorar la salud y el bienestar general del individuo, estos ejercicios se adaptan en habilidades naturales para trabajar diferentes organismos y sistemas, se busca sacar el máximo provecho del cuerpo y sus movimientos en diferentes actividades."
              maxHeigth={120}
              isAllwaysActive={true}
            />
            <AccordionText
              title="Preso-terapia"
              text="Consiste en la aplicación de una fuerza mecánica de aproximadamente 25 mm Hg a 40 mm de Hg mantenida sobre la cicatriz o injerto, al cual se opone la fuerza de los tejidos profundos a través de la aplicación de elementos rígidos y elásticos compresivos como trajes y vendajes; elementos semirrígidos como bandas de silicona y elementos rígidos como material plástico; se usan además esteroides tópicos, parches de poliuretanos y moldes acrílicos. Generalmente es utilizada en personas cuya cicatriz demora más de 14 días promedio para iniciar el proceso de epitelización, o en aquellas personas que requieren injertos con el fin de facilitar la remodelación y organización del tejido colágeno."
              maxHeigth={200}
              isAllwaysActive={true}
            />
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
    maxHeight: '100%'
  }
})

export default ScarManage;
