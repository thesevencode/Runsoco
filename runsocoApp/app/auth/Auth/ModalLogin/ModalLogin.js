import React, {useState} from 'react';
import { View, Text, TouchableOpacity, TextInput, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import AsyncStorage from '@react-native-community/async-storage';
// import userApi from '../../../config/axios'


import styles from './styles';
import styles2 from '../ModalRegister/styles';

function ModalLogin({ navigation }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const login = () => {

    // const token = Buffer.from(`${email}:${password}`, 'utf8').toString('base64')
    const payload = {
      email: email,
      password: password,
    }
  
    // userApi.post('', payload)
    //   .then(async function (response) {
    //     console.log("------------------------")
    //     console.log(response.data.email);
    //     // try {
    //       await AsyncStorage.setItem('userEmail', response.data.email);
    //       navigation.navigate("App")
    //     // } catch (error) {
    //     //   // Error retrieving data
    //     //   console.log(error.message);
    //     // }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    }
  return (
    <View style={styles2.container}>
      <View style={styles2.form}>
        <View style={[styles2.formHeader, styles.formHeader]}>
          <TouchableOpacity style={styles2.formBtn1}>
            <Text style={[styles2.formText1, styles2.formText] } onPress={() => navigation.navigate("Auth", { content: 'register' })}>Regístrate</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles2.formBtn2}>
            <Text style={[styles2.formText2, styles2.formText]} onPress={() => navigation.navigate("Index")}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.image}>
          <Text style={styles2.imageText}>Iniciar sesión</Text>
          <TouchableOpacity style={styles.imageBtn}>
            <Text style={styles.imageTextF}>
              Facebook
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles2.or, styles.or]}>
          <View style={styles2.or1}></View>
          <Text style={styles2.orText}>o</Text>
          <View style={styles2.or1}></View>
        </View>
        <View style={styles.inputs}>
          <TextInput style={styles2.input} onChange={e=>setEmail(e.nativeEvent.text)} placeholder="Correo electrónico"/>
          <TextInput style={styles2.input} onChange={e=>setPassword(e.nativeEvent.text)} placeholder="Contraseña"/>
        </View>
        <TouchableOpacity>
          <Text style={styles.text}>
            ¿Olvidaste  tu contraseña?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerBtn}>
        <TouchableOpacity 
          style={styles2.btn}
          // onPress={() => navigation.navigate("App")}
          onPress={login}
        >
          <Text style={styles2.btnText}>INICIAR SESIÓN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ModalLogin;