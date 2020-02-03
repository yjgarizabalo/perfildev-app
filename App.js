import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import logo from './assets/img/perfildev-logo.png'
import Icon from 'react-native-vector-icons/Ionicons'

// constructor() {
//   this.state = {
//     showPass: true,
//     press: false
//   }  
// }

const { width: WIDTH } = Dimensions.get('window')

export default function App() {

  return (
    <ImageBackground style={styles.backgroundContainer}>
      {/* header */}
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>Tu mejor version en el mundo laboral</Text>
      </View>
      {/* end header */}

      <View style={styles.inputContainer}>
        <Icon name={'ios-person'} size={25} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder={'Usuario'}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name={'ios-lock'} size={25} color={'rgba(255, 255, 255, 0.7)'} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder={'Contraseña'}
          secureTextEntry={true}
          placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
          underlineColorAndroid='transparent'
        />
        <TouchableOpacity style={styles.btnEye}>
          <Icon name={'ios-eye'} size={25} color={'rgba(255, 255, 255, 0.7)'} underlineColorAndroid='transparent' />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.Textbtn}>Iniciar sesión</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: '#280144',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 50
  },

  logo: {
    width: 180,
  },

  logoText: {
    color: 'white',
    fontSize: 14,
    paddingTop: 5,
    opacity: 0.5,
    fontWeight: '500'
  },

  inputContainer: {
    marginTop: 9,
  },

  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25
  },

  inputIcon: {
    position: 'absolute',
    top: 8,
    left: 38
  },

  btnEye: {
    position: 'absolute',
    top: 10,
    right: 37
  },

  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor:'rgba(255, 255, 255, 0.74)',
    fontSize: 16,
    justifyContent: 'center',
    marginTop: 20,
  },

  Textbtn: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: 16,
    textAlign: 'center'
  }
});
