import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Font from '../constants/Font';

const Card = ({bmiData, bmiResult}) => {
  return (
    <View style={styles.sectionModal}>
      <View
        style={{borderBottomWidth: 2, borderBottomColor: 'red', marginTop: 5}}>
        <Text style={styles.modalHead}>
          Result :<Text style={styles.resultName}> {bmiData.name}</Text>
        </Text>
      </View>

      <Text style={styles.modalTitle}>BMI = {bmiResult.result} kg/m²</Text>
      <Text style={styles.modalResult}>{bmiResult.info}</Text>
      <Text style={styles.modalInfo}>{bmiResult.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionModal: {
    top: 0,
    position: 'absolute',
    width: '85%',
    height: 320,
    borderRadius: 10,
    alignSelf: 'center',
    textAlign: 'start',
    paddingHorizontal: 24,
    borderWidth: 1,
    borderColor: 'transparent',
    marginHorizontal: 15,
    backgroundColor: '#ECECEC',
  },
  modalHead: {
    paddingLeft: 10,
    fontSize: 26,
    color: 'red',
    paddingTop:20,
    marginBottom:10,
    fontFamily: Font['poppins-bold'],
    textTransform: 'capitalize',
  },
  resultName:{
    fontSize:25,
    color:"black",
    fontFamily:Font["poppins-semiBold"],
    textTransform:"uppercase"
  },
  modalTitle: {
    marginTop: 20,
    fontSize: 26,
    fontFamily: Font['poppins-regular'],
    textAlign: 'center',
    color: 'black',
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
  modalResult: {
    fontSize: 32,
    letterSpacing: 2,
    color: '#f1f4ff',
    paddingHorizontal: 15,
    fontWeight: '900',
    textAlign: 'center',
    marginTop:20,
    borderRadius:10,
    paddingVertical:5,
    backgroundColor:"red",
    fontFamily: Font['poppins-regular'],
  },
  modalInfo: {
    marginTop: 30,
    fontSize: 20,
    fontFamily: Font['poppins-regular'],
    textAlign: 'center',
    color: 'black',
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
});
export default Card;
