import React, {useState, useEffect, useRef} from 'react';
import Toast from "react-native-easy-toast";

import { 
  View, 
  Text, 
  TouchableOpacity, 
  TextInput, 
  AsyncStorage 
} from 'react-native';

import { connect } from 'react-redux'
import { fetchLoginUsers } from '../../../redux'


import Loading from "../../../components/Loading";

// import Icon from 'react-native-vector-icons/FontAwesome';
// import AsyncStorage from '@react-native-community/async-storage';


import styles from './styles';
import styles2 from '../ModalRegister/styles';

function ModalLogin(props) {
  const { navigation, loginData, fetchLoginUsers} = props
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const toastRef = useRef()

  useEffect(() => {
    // AsyncStorage.removeItem('email');
    // if(loginData.error) {
    //   toastRef.current.show("Credenciales incorrectas", 2000)
    // }
    // if(loginData.user.status) {
    //   saveStorage()
    //     // try {
    //     //   await AsyncStorage.setItem('token', loginData.user.token)
    //     //   await AsyncStorage.setItem('email', loginData.user.data.email);
    //     // } catch (error) {
    //     //   console.log(error.message);
    //     // }
    //   // console.log("-------------------------------------------------------------------------------------------------------")
    //   // console.log("loginData.user.token ", loginData.user.token)
    //   // console.log("loginData.user.data.email ", loginData.user.data.email)
    //   // console.log("-------------------------------------------------------------------------------------------------------")
    //   // navigation.navigate("App")
    // }

  }, [loginData])

  const login = async () => {
    const payload = {
      email: email,
      password: password,
    }
    await fetchLoginUsers(payload)
    if(loginData.error) {
      toastRef.current.show("Credenciales incorrectas", 2000)
    }
    if(loginData.user.status) {
      saveStorage()
        // try {
        //   await AsyncStorage.setItem('token', loginData.user.token)
        //   await AsyncStorage.setItem('email', loginData.user.data.email);
        // } catch (error) {
        //   console.log(error.message);
        // }
      // console.log("-------------------------------------------------------------------------------------------------------")
      // console.log("loginData.user.token ", loginData.user.token)
      // console.log("loginData.user.data.email ", loginData.user.data.email)
      // console.log("-------------------------------------------------------------------------------------------------------")
      // navigation.navigate("App")
    }
  }
  const saveStorage = async () => {
    await AsyncStorage.setItem('token', loginData.user.token)
    await AsyncStorage.setItem('email', loginData.user.data.email);
    navigation.navigate("App")
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
      <Loading isVisible={loginData.loading} text="Verificando..." />
      <Toast ref={toastRef} position="center" opacity={1} />
    </View>
  );
}

const mapStateToProps = state => {
  return {
    loginData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchLoginUsers: (data) => dispatch(fetchLoginUsers(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalLogin)