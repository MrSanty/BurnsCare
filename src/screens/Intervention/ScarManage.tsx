import { FC } from "react";
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import Card from "src/components/Card";
import YoutubePlayer from "src/components/YoutubePlayer";

interface Props {
  navigation: any;
}

const ScarManage: FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('src/assets/images/background.jpg')}
        style={styles.container}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>MASAJE</Text>
          <Text style={styles.title}>CICATRICIAL</Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.scroll}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={styles.scroll}
            >
              <Card
                title="Introducción"
                text="Las técnicas de masaje manual más indicadas son las vibraciones, amasamientos, presiones, pinzamientos y estiramientos"
              />

              <Card title="Masaje cicatrizal">
                <View style={{ height: 200 }}>
                  <YoutubePlayer videoId="9k8c8JYJ2o8" />
                </View>
              </Card>

              <Card title="Estiramientos">
                <View style={{ height: 500, flexDirection: 'column', justifyContent: 'space-between' }}>
                  <View>
                    <Text
                      style={{ fontFamily: 'Poppins-Bold', fontSize: 17, color: '#2E2F32' }}
                    >
                      Amasamiento
                    </Text>
                    <YoutubePlayer videoId="9k8c8JYJ2o8" />
                  </View>

                  <View>
                    <Text
                      style={{ fontFamily: 'Poppins-Bold', fontSize: 17, color: '#2E2F32' }}
                    >
                      Ortodérmicos
                    </Text>
                    <YoutubePlayer videoId="9k8c8JYJ2o8" />
                  </View>
                </View>
              </Card>

              <Card title="Pellizcamiento">
                <View style={{ height: 200 }}>
                  <YoutubePlayer videoId="9k8c8JYJ2o8" />
                </View>
              </Card>

              <Card title="Presiones">
                <View style={{ height: 500, flexDirection: 'column', justifyContent: 'space-between' }}>
                  <View>
                    <Text
                      style={{ fontFamily: 'Poppins-Bold', fontSize: 17, color: '#2E2F32' }}
                    >
                      Amasamiento
                    </Text>
                    <YoutubePlayer videoId="9k8c8JYJ2o8" />
                  </View>

                  <View>
                    <Text
                      style={{ fontFamily: 'Poppins-Bold', fontSize: 17, color: '#2E2F32' }}
                    >
                      Ortodérmicos
                    </Text>
                    <YoutubePlayer videoId="9k8c8JYJ2o8" />
                  </View>
                </View>
              </Card>

              <Card title="Vibraciones">
                <View style={{ height: 500, flexDirection: 'column', justifyContent: 'space-between' }}>
                  <View>
                    <Text
                      style={{ fontFamily: 'Poppins-Bold', fontSize: 17, color: '#2E2F32' }}
                    >
                      Amasamiento
                    </Text>
                    <YoutubePlayer videoId="9k8c8JYJ2o8" />
                  </View>

                  <View>
                    <Text
                      style={{ fontFamily: 'Poppins-Bold', fontSize: 17, color: '#2E2F32' }}
                    >
                      Ortodérmicos
                    </Text>
                    <YoutubePlayer videoId="9k8c8JYJ2o8" />
                  </View>
                </View>
              </Card>

              <Card title="Amasamiento">
                <View style={{ height: 200 }}>
                  <YoutubePlayer videoId="9k8c8JYJ2o8" />
                </View>
              </Card>
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
  }
})

export default ScarManage;
