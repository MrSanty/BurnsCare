import { FC } from "react";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import ButtonGradient from "src/components/ButtonGradient";
import Card from "src/components/Card";
import Podcast from "src/components/Podcast";

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
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          >
            <Card title='Podcast'>
              <Podcast 
                url='https://audio.jukehost.co.uk/H8RMWfdpikFfgC9SfIdT1eqJHi8Rba88'
                title='Podcast 2'
                artist='Anónimo'
              />
            </Card>
            <Card
              title="Introducción"
              text="Se sugiere un entrenamiento moderado de la fuerza muscular, evitando cargas elevadas, por la sensibilidad de las estructuras articulares especialmente durante la primera fase de recuperación."
              isJustified
            />
            <Card
              title="Recomendaciones"
              text={[
                "Durante el desarrollo de la terapia se debe vigilar la integridad de la piel, especialmente las zonas injertadas en caso de alteraciones sensitivas.",
                "Al usuario se le debe enseñar a inspeccionar su piel después de cada sesión de ejercicio terapéutico y ajustar el tipo o la duración del ejercicio a la respuesta de cada uno de los sistemas",
                "La implementación de un programa de ejercicios regular, inmediatamente después de que se supere el periodo crítico en una persona que ha presentado una quemadura, contribuye al desarrollo de la tolerancia cardiorrespiratoria o capacidad aeróbica, lo cual beneficia la ejecución de actividades funcionales y su calidad de vida.",
                "En los niños se debe evitar entrenamientos de fuerza o resistencia de alta intensidad, la progresión del ejercicio de forma gradual y lenta para evitar la presencia de posibles lesiones y asegurar la adherencia de los niños al programa de ejercicios propuesto. ",
                "Realizar reevaluaciones periódicas de la evolución del usuario frente al programa de ejercicios instaurado, pues de por si se requiere ajustes en la intensidad, duración, frecuencia o modo de ejecución.",
                "Se puede acompañar el programa de ejercicios de actividades lúdicas y recreativas que fomenten mayor seguridad, disfrute y disminución de la tensión que tienden a provocar los ambientes hospitalarios y la ejecución de ejercicios de forma rutinaria.",
                "Se debe educar a la persona con quemaduras, familia y cuidadores. Los efectos benéficos de un programa de ejercicios sobre su condición de salud y el establecimiento de estilos de vida saludables que permanezcan en el tiempo, depende en gran medida del apoyo de quienes le rodean."
              ].join('\n\n● ')}
              isJustified
            />
            
            <Card title='Plan de Egreso'>
              <Podcast 
                url='https://audio.jukehost.co.uk/EdVHT1AubBahDTsG3fFjNBgftk56vuXs'
                title='Podcast 3'
                artist='Anónimo'
              />
            </Card>

            <View style={{ marginBottom: 20 }}>
              <ButtonGradient
                text="Tipos de ejercicios"
                onPress={() => navigation.navigate('Tipos de ejercicios terapéuticos')}
              />
            </View>
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

export default TherapeuticExercise;
