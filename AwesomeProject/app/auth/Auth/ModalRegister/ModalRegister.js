import React, {useState, useRef} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Image, 
    TextInput 
} from 'react-native';
import Toast from "react-native-easy-toast";

import { validateEmail } from '../../../utils/Validation';

import styles from './styles';


function ModalRegister({ navigation }) {
  
  const [name, setName] = useState("")
  const [cellphone, setCellphone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [city, setCity] = useState("Puerto Maldonado")
  const [terms, setTerms] = useState(true)


  const toastRef = useRef()


  const register = () => {
    if (!name || !cellphone || !email || !password) {
      toastRef.current.show("Todos los campos son obligatorios", 2000);
    } else {
      if(cellphone.length!==9){
        toastRef.current.show("El número de celular es incorrecto", 2000);
      } else {
        if (!validateEmail(email)) { 
          toastRef.current.show("El email no es correcto", 2000);
        } else {
          let user = {
            name: name,
            cellphone: cellphone,
            email: email,
            password: password,
            city: city,
            terms: terms
          }
          navigation.navigate("Auth", { content: 'terms', user: user })
        }
      }

    }

  }
  

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.formHeader}>
          <TouchableOpacity style={styles.formBtn1}>
            <Text style={[styles.formText1, styles.formText] } onPress={() => navigation.navigate("Auth", { content: 'login' })}>Iniciar sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.formBtn2} onPress={() => navigation.navigate("Index")}>
            <Text style={[styles.formText2, styles.formText]}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.image}>
          <Text style={styles.imageText}>Regístrate</Text>
          <TouchableOpacity style={styles.imageBtn}>
            <Image style={styles.imageImage} source={{ uri: 'https://github.com/ciriusblb/runsoco-user-xd/blob/master/register.png?raw=true' }} />
          </TouchableOpacity>
        </View>
        <View style={styles.or}>
          <View style={styles.or1}></View>
          <Text style={styles.orText}>o</Text>
          <View style={styles.or1}></View>
        </View>
        <View style={styles.inputs}>
          <TextInput style={styles.input} onChange={e=>setName(e.nativeEvent.text)} placeholder="Nombres(s)"/>
          <TextInput style={styles.input} onChange={e=>setCellphone(e.nativeEvent.text)} keyboardType={'numeric'} placeholder="Celular"/>
          <TextInput style={styles.input} onChange={e=>setEmail(e.nativeEvent.text)} placeholder="Correo electrónico"/>
          <TextInput style={styles.input} onChange={e=>setPassword(e.nativeEvent.text)} secureTextEntry={true} placeholder="Contraseña"/>
        </View>
      </View>
      <View style={styles.containerBtn}>
        <TouchableOpacity 
          style={styles.btn}
          // onPress={() => navigation.navigate("Auth", { content: 'terms' })}
          onPress={register}
          >
          <Text style={styles.btnText} >REGÍSTRATE</Text>
        </TouchableOpacity>
      </View>
      <Toast ref={toastRef} position="center" opacity={0.5} />
    </View>
  );
}

export default ModalRegister;