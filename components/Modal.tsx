import {Image, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Font from '../constants/Font';

const Modal = ({setOpenModal}) => {
  return (
    <View style={styles.sectionModal}>
      <View
        style={{borderBottomWidth: 2, borderBottomColor: 'red', marginTop: 5}}>
        <Text style={styles.modalHead}> BMI Categories</Text>
      </View>
      <View
       style={styles.section}>
        <Text style={styles.modalTitle}> Under Weight {'=<'} 18.5 </Text>
        <Text style={styles.modalTitle}> Healthy Weight {'='} 18.5–24.9 </Text>
        <Text style={styles.modalTitle}> Overweight {'='} 25–29.9 </Text>
        <Text style={styles.modalTitle}> Obesity BMI of 30 or greater </Text>
      </View>
      <View style={styles.section}>
        <Image
          source={require('../assets/modal-img.jpg')}
          style={{width: '95%', height:300, resizeMode: "contain", borderRadius:10, marginTop:25}}
        />
      </View>
      <View style={{marginTop:50}}>
        <TouchableOpacity style={styles.button} onPress={()=>setOpenModal(false)}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionModal: {
    position: 'absolute',
    top:30,
    width: "100%",
    height: "100%",
    alignSelf:"center",
    alignContent:"space-around",
    borderRadius:10,
    backgroundColor: '#ECECEC',
  },
  section:{
    alignItems:"center"
  },

  modalHead: {
    paddingLeft: 10,
    fontSize: 24,
    color: 'red',
    fontFamily: Font['poppins-bold'],
    textTransform: "uppercase",
    textAlign:"center",
    paddingVertical:15
  },
  modalTitle: {
    marginTop: 20,
    fontSize: 22,
    fontFamily: Font['poppins-regular'],
    textAlign: 'center',
    color: 'black',
    paddingHorizontal: 15,
    marginHorizontal: 10,
  },
  sectionButton: {
    marginTop: 22,
    paddingHorizontal: 4,
    alignItems: 'center',
    justifyContent: 'flex-end',

  },
  button: {
    width: '80%',
    paddingHorizontal: 15,
    marginHorizontal:20,
    alignSelf:"center",
    paddingVertical: 10,
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
});

export default Modal;
