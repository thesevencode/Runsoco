import React, {useState, useRef} from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import Toast from "react-native-easy-toast";


import {API} from '../../../config/consts'

import Loading from "../../../components/Loading";


import styles from './styles';
import styles2 from '../ModalRegister/styles';

function ModalTerms(props) {
  const { navigation, user } = props
  const [isLoading, setIsLoading] = useState(false)
  const toastRef = useRef()


  const acceptTerms = () => {
    if(user) {
      console.log("user ", user)
      setIsLoading(true)
      fetch(`${API}/auth/signIn`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      .then((response) => response.json())
      .then((json) => {
        setIsLoading(false)
        // toastRef.current.show(json.message, 2000)
        if(json.status) {
          navigation.navigate("Index")
        }else {
          // navigation.navigate("Auth", {content: "register"})
        }

      })
      .catch((error) => {
        setIsLoading(false)
        toastRef.current.show("ocurrio un error intentelo mas tarde", 2000)
        // navigation.navigate("Index")
      });
    }
  }


  return (
    <View style={styles2.container}>
      <View style={styles2.form}>
        <View style={styles2.formHeader}>
          <Text></Text>
          <TouchableOpacity 
            style={styles2.formBtn2}
            onPress={() => navigation.navigate("Index")}
          >
            <Text style={[styles2.formText2, styles2.formText] }>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles2.image}>
          <Text style={[styles2.imageText, styles.imageText]}>Términos. condiciones y privacidad</Text>
          <TouchableOpacity style={styles2.imageBtn}>
            <Image style={[styles2.imageImage, styles.imageImage]} source={{ uri: 'https://github.com/ciriusblb/runsoco-user-xd/blob/master/apreton-de-manos.png?raw=true' }} />
          </TouchableOpacity>
        </View>
        <View style={styles2.or}>
          <View style={styles2.or1}></View>
          <Text style={styles2.orText}>o</Text>
          <View style={styles2.or1}></View>
        </View>
        <View>
          <Text style={[styles.text, styles.text1]}>
            Usamos los datos de nuestros clientes para mejorar la experiencia de nuestro servicio y 
            mostrar promociones relacionadas.
          </Text>
          <Text style={styles.text}>
            Para continuar, acepte los
            <Text style={styles.subtext}>
              Términos y condiciones, política de privacidad de datos y cookies.
            </Text>
          </Text>
        </View>
      </View>
      <View style={styles2.containerBtn}>
        <TouchableOpacity 
          style={[styles2.btn, styles.btn]}
          // onPress={() => navigation.navigate("Auth", { content: 'confirmation' })}
          onPress={acceptTerms}
          >
          <Text style={styles2.btnText}>CONTINUAR</Text>
        </TouchableOpacity>
      </View>
      <Loading isVisible={isLoading} text="Registrando..." />
      <Toast ref={toastRef} position="center" opacity={1} />
    </View>
  );
}

export default ModalTerms;