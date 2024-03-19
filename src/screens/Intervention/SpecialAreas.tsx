import { ActivityIndicator, Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import Card from "src/components/Card";
import Podcast from 'src/components/Podcast';
import { usePodcast } from 'src/hooks/usePodcast';

const SpecialAreas = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('src/assets/images/background.jpg')}
        style={styles.container}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>QUÉMADURAS EN</Text>
          <Text style={styles.title}>ÁREAS ESPECIALES</Text>
        </View>
        <View style={styles.contentContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll}
          >
            <Card
              title="Introducción"
              text="Son aquellas zonas que por su ubicación generan grandes complicaciones funcionales y/o estéticas. Corresponden a los  pliegues o articulaciones, el periné, la región de los senos en las mujeres, cara y cuello, manos y pies."
              isJustified
            />

            <Card
              title="Orejas"
              text={[
                "En la oreja la lesión se clasifica en:",
                "Leve: Pérdida de hélix y parte superior de pabellón auricular.",
                "Moderado: Pérdida de la mitad superior de la oreja, antehélix y curva posterior."
              ].join('\n\n● ')}
              isJustified
            />

            <Card
              title="Nariz"
              text="A nivel nasal, el defecto habitual es la pérdida de cobertura cutánea y las cicatrices deformantes como pérdida de tejido, ectropión nasal, estenosis de los conductos nasales y pérdida total de la nariz, la cual requerirá reconstrucción completa."
              isJustified
            />

            <Card
              title="Párpados"
              text="A nivel de los párpados es común encontrar lesiones de la córnea y ectropiones con deformidad cantal y pérdida de las cejas."
              isJustified
            />

            <Card
              title="Boca"
              text="Las quemaduras en la boca, generan microstomía y pérdida de la capacidad de apertura."
              isJustified
            />

            <Card
              title="Cuello"
              text="En el cuello pueden generar disminución de la movilidad llegando inclusive a afectar la intubación de la persona lesionada."
              isJustified
            />

            <Card
              title="Extremidades"
              text="En las extremidades es común encontrar bridas, sindactilia, retracciones y deformidades de las articulaciones."
              isJustified
            />

            <Card title='Plan de Egreso'>
              <Podcast 
                url='https://audio.jukehost.co.uk/H8RMWfdpikFfgC9SfIdT1eqJHi8Rba88'
                title='Podcast 2'
                artist='Anónimo'
              />
            </Card>
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

export default SpecialAreas;
