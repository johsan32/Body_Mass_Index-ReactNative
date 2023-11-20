import React, {useState} from 'react';
import Font from './constants/Font';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Input from './components/Input';
import Modal from './components/Modal';

function App(): JSX.Element {
  const [openModal, setOpenModal] = useState(false);

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{position: 'relative'}}>
          <Image
            source={require('./assets/logo.png')}
            style={{width: '100%', height: 250, resizeMode: 'contain'}}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.sectionTitle} onPress={() => setOpenModal(true)}>
            Body Mass Index
            <Image
              source={require('./assets/info.png')}
              style={{width: 30, height: 50, resizeMode: 'contain'}}
            />
          </Text>
        </View>
        <View>
          <Input />
        </View>
      </ScrollView>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 32,
    letterSpacing: 2,
    color: '#1F41BB',
    paddingHorizontal: 15,
    fontWeight: '900',
    textAlign: 'center',
    fontFamily: Font['poppins-regular'],
  },
  info: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom:20
  },
  image: {
    width: 150,
    height: 150,
  },
});

export default App;
