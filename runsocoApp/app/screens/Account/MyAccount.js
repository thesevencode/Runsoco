import React, {useState, useEffect} from 'react';
import { Text, AsyncStorage } from "react-native";

// import Loading from '../../components/Loading'
// import UserGuest from '../../index/UserGuest'
import UserLogged from './UserLogged'


export default function MyAccount({navigation}) {

  // const [login, setLogin] = useState(null)
  console.log("mi cuenta");
  // useEffect(() => {
  //   AsyncStorage.getItem('userInfo').then(
  //     value =>{
  //       console.log("valueemail ", value)
  //       // !value ? setLogin(false): setLogin(true)
  //     }
  //   )
  //   AsyncStorage.getItem('token').then(
  //     value =>{
  //       console.log("token ", value)
  //       // !value ? setLogin(false): setLogin(true)
  //     }
  //   )
  //   AsyncStorage.getItem('email').then(
  //     value =>{
  //       console.log("email ", value)
  //       // !value ? setLogin(false): setLogin(true)
  //     }
  //   )
  // }, [])

  
  // if (login === null) {
    return (
      // <Text>Hola</Text>
        <UserLogged navigation={navigation} />
      // <Loading isVisible={true} text="Cargando..." /> 
    );
  // }
//  return login ? <UserLogged navigation={navigation} /> : <UserGuest navigation={navigation} />
}