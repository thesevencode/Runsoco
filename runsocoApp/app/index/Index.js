import React, {useState, useEffect} from 'react';
import { Text, AsyncStorage } from "react-native";

// import Loading from '../components/Loading'
import UserGuest from './UserGuest'
// import UserLogged from './UserLogged'


export default function MyAccount({navigation}) {

  // const [login, setLogin] = useState(null)
  useEffect(() => {
    AsyncStorage.getItem('email').then(
      value =>{
        console.log("valueemail- ", value)
        if(value){
          navigation.navigate("Mi cuenta")
        }
      }
    )
    console.log("valueemail- ")
  }, [])

  
  // if (login === null) {
    return (
      <UserGuest navigation={navigation} />
      // <Text>Hola</Text>

      // <Loading isVisible={true} text="Cargando..." /> 
    );
  // }
//  return login ? navigation.navigate("Mi cuenta") : <UserGuest navigation={navigation} />
}