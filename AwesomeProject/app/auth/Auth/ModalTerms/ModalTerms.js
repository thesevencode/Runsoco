import React, { useEffect, useRef} from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import Toast from "react-native-easy-toast";

import { connect } from 'react-redux'
import { fetchRegisterUsers } from '../../../redux'


import Loading from "../../../components/Loading";


import styles from './styles';
import styles2 from '../ModalRegister/styles';

function ModalTerms(props) {

  const { navigation, user, fetchRegisterUsers, userData } = props
  const toastRef = useRef()


  useEffect(() => {
    if(userData.error) {
      toastRef.current.show("ocurrio un error intentelo mas tarde", 2000)
    }
    if(userData.user.status) {
      navigation.navigate("Index")
    }
  }, [userData])

  const acceptTerms = async () => {
    if(user) {
      await fetchRegisterUsers(user)
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
      <Loading isVisible={userData.loading} text="Registrando..." />
      <Toast ref={toastRef} position="center" opacity={1} />
    </View>
  );
}
const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRegisterUsers: (data) => dispatch(fetchRegisterUsers(data))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalTerms)