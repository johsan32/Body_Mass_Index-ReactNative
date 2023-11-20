import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Font from '../constants/Font';
import Card from './Card';

const Input = () => {
  const [bmiData, setBmiData] = useState({
    name: '',
    weight: '',
    height: '',
  });
  const [bmiResult, setBmiResult] = useState({
    result: '',
    info: '',
    title: '',
  });
  const [openInfo, setOpenInfo] = useState(false);

  const handleClick = () => {
    const weight = parseFloat(bmiData.weight);
    const height = parseFloat(bmiData.height) / 100;

    if (!isNaN(weight) && !isNaN(height)) {
      const bmi = (weight / (height * height)).toFixed(2);
      setBmiResult(prevState => ({...prevState, result: bmi}));

      setBmiResult(prevState => {
        const bmiInfo = parseFloat(prevState.result);

        if (bmiInfo >= 18.5 && bmiInfo <= 25.0) {
          return {
            ...prevState,
            info: 'Healthy Weight',
            title: "Between 18.5 and 24.9  you're in the healthy weight range",
          };
        } else if (bmiInfo >= 14 && bmiInfo < 18.5) {
          return {
            ...prevState,
            info: 'Underweight',
            title: "Below 18.5  you're in the underweight range",
          };
        } else if (bmiInfo > 25 && bmiInfo <= 30) {
          return {
            ...prevState,
            info: 'Overweight',
            title: "Between 25 and 29.9  you're in the overweight range",
          };
        } else if (bmiInfo > 30 && bmiInfo <= 40.0) {
          return {
            ...prevState,
            info: 'Obese',
            title: "30 or over you're in the obese range",
          };
        } else if (bmiInfo > 40 && bmiInfo <= 14) {
          return {result: '', info: '', title: ''};
        }

        return prevState;
      });
      setOpenInfo(true);
    } else {
      Alert.alert('Please, enter information');
    }
  };

  console.log('bmidata', bmiData);
  console.log('restu0,', bmiResult);

  const handleReset = () => {
    setOpenInfo(false);
    setBmiData({name: '', weight: '', height: ''});
    setBmiResult({result: '', info: '', title: ''});
  };
  return (
    <View style={{flex: 1}}>
      <View>
        <Text style={styles.sectionDescription}>Enter your information</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          placeholder="Name"
          value={bmiData.name}
          onChangeText={text =>
            setBmiData(prevState => ({...prevState, name: text}))
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          keyboardType="numeric"
          placeholder="Height (example: 175 cm)"
          value={bmiData.height}
          onChangeText={text =>
            setBmiData(prevState => ({...prevState, height: text}))
          }
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputText}
          keyboardType="numeric"
          placeholder="Weight (example: 68 kg)"
          value={bmiData.weight}
          onChangeText={text =>
            setBmiData(prevState => ({...prevState, weight: text}))
          }
        />
      </View>
      <View style={styles.sectionButton}>
        <TouchableOpacity style={styles.button} onPress={handleClick}>
          <Text style={styles.buttonText}>Calculate</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>New</Text>
        </TouchableOpacity>
      </View>

      {openInfo && <Card bmiData={bmiData} bmiResult={bmiResult} />}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  inputContainer: {
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 10,
    marginTop: 10,
  },
  inputText: {
    paddingLeft: 10,
    fontSize: 16,
    fontFamily: Font['poppins-regular'],
  },
  sectionTitle: {
    fontSize: 32,
    letterSpacing: 2,
    color: '#1F41BB',
    paddingHorizontal: 15,
    fontWeight: '900',
    textAlign: 'center',
    fontFamily: Font['poppins-regular'],
  },
  sectionDescription: {
    marginTop: 20,
    fontSize: 20,
    fontFamily: Font['poppins-regular'],
    textAlign: 'center',
    color: 'black',
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
  sectionButton: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    width: '80%',
    paddingHorizontal: 15,
    paddingVertical: 8,
    shadowColor: '#1F41BB',
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: '#1F41BB',
    shadowOffset: {
      width: 0,
      height: 30,
    },
    marginVertical: 5,
    shadowOpacity: 0.4,
  },
  buttonText: {
    color: 'white',
    fontFamily: Font['poppins-bold'],
    fontSize: 24,
    textAlign: 'center',
  },

  image: {
    width: 150,
    height: 150,
  },
});

export default Input;
