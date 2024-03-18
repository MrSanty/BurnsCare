import { FC } from "react";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import Card from "src/components/Card";

interface Props {
  navigation: any;
}

const TypesTherapeutic: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('src/assets/images/background.jpg')}
        style={styles.container}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>TIPOS DE</Text>
          <Text style={styles.title}>EJERCICIO TERAPÉUTICO</Text>
        </View>
        <View style={styles.contentContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          >
            <Card
              title="Ejercicios de estiramiento muscular"
              text="Los ejercicios de estiramiento muscular son técnicas fundamentales en los programas de rehabilitación en el área de fisioterapia, teniendo como beneficio a los pacientes la amplitud de movimiento articular, disminución del tono muscular y la prevención de lesiones musculares al momento de realizar la terapia, se realizan haciendo elongaciones de los músculos y de los tendones."
              isJustified
            />
            <Card
              title="Ejercicios activos y activo-asistidos"
              text="Los ejercicios activos y activo-asistidos son estiramientos que se dan por medio de contracciones agonistas de los músculos realizadas por el individuo sin ayuda de otra persona, la principal diferencia de estos dos ejercicios, es que cuando se hace el ejercicio y llega al límite de la de amplitud de movimiento de la persona esta será terminada por un acompañante, en este caso serán denominados movimientos activo-asistido."
              isJustified
            />
            <Card
              title="Ejercicios isométricos"
              text="Los ejercicios isométricos son aquellos que se ejecutan cuando los músculos se contraen en tensión sin la ejecución de ningún movimiento, estos se pueden trabajar agregando un peso extra o con el propio peso corporal, estas contracciones duran unos segundos."
              isJustified
            />
            <Card
              title="Ejercicios de fortalecimiento muscular"
              text="Los ejercicios de fortalecimiento son conocidos en el área de fisioterapia por hacerse por medio de actividades motoras siendo su finalidad el incremento de la fuerza de los músculos, estos se pueden hacer por medio de diferentes aparatos."
              isJustified
            />
            <Card
              title="Ejercicios de resistencia aeróbica"
              text="Los ejercicios de resistencia aeróbica son actividades que se basan en un alto consumo de oxígeno, son realizadas en tiempo mayores de 8 minutos o movimientos de larga duración, los parámetros altos de consumo de oxígeno en los órganos y sistemas garantizan la resistencia del ejercicio"
              isJustified
            />
            <Card
              title="Ejercicios funcionales"
              text="El entrenamiento funcional se basa en ejercicios para mejorar la salud y el bienestar general del individuo, estos ejercicios se adaptan en habilidades naturales para trabajar diferentes organismos y sistemas, se busca sacar el máximo provecho del cuerpo y sus movimientos en diferentes actividades."
              isJustified
            />
            <Card
              title="Presoterapia"
              text={[
                "Consiste en la aplicación de una fuerza mecánica de aproximadamente 25 mm Hg a 40 mm de Hg mantenida sobre la cicatriz o injerto, al cual se opone la fuerza de los tejidos profundos a través de la aplicación de elementos rígidos y elásticos compresivos como trajes y vendajes; elementos semirrígidos como bandas de silicona y elementos rígidos como material plástico; se usan además esteroides tópicos, parches de poliuretanos y moldes acrílicos. Generalmente es utilizada en personas cuya cicatriz demora más de 14 días promedio para iniciar el proceso de epitelización, o en aquellas personas que requieren injertos con el fin de facilitar la remodelación y organización del tejido colágeno.",
                "También se pueden utilizar siliconas, vendajes compresivos y férulas."
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
    flex: 1,
    paddingTop: 20,
  },
  titleContainer: {
    alignItems: 'center',
    paddingBottom: 20,
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
  scroll: {
    flexGrow: 0
  }
})

export default TypesTherapeutic;
