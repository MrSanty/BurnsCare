import { FC } from "react";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { useNavigationChange } from 'src/hooks/useNavigationChange';

interface Props {
  navigation: any;
}

const TherapeuticExercise: FC<Props> = ({ navigation }) => {
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
                <Text style={styles.cardTitle}>Introducción</Text>
                <Text style={styles.cardText}>
                  Se sugiere un entrenamiento moderado de la fuerza muscular, evitando cargas elevadas, por la sensibilidad de las estructuras articulares especialmente durante la primera fase de recuperación.
                </Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Ejercicio de fortalecimiento</Text>
                <Text style={styles.cardText}>
                  Los ejercicios de fortalecimiento son conocidos en el área de fisioterapia por hacerse por medio de actividades motoras siendo su finalidad el incremento de la fuerza de los músculos, estos se pueden hacer por medio de diferentes aparatos.
                </Text>
              </View>
              <View style={styles.card}>
                <Text style={styles.cardTitle}>Ejercicio de estiramiento</Text>
                <Text style={styles.cardText}>
                  Los ejercicios de estiramiento muscular son técnicas fundamentales en los programas de rehabilitación en el área de fisioterapia, teniendo como beneficio a los pacientes la amplitud de movimiento articular, disminución del tono muscular y la prevención de lesiones musculares al momento de realizar la terapia, se realizan haciendo elongaciones de los músculos y de los tendones.
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

export default TherapeuticExercise;
