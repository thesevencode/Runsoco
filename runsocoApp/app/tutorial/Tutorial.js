import React, {useState, useEffect} from 'react';
import {
  Text, 
  View,
  StyleSheet,
  AsyncStorage,
  SafeAreaView,
  ScrollView } from 'react-native';
import {Button} from 'react-native-elements'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { LinearGradient } from 'expo-linear-gradient';



import Carousel,
{ Pagination } 
from 'react-native-snap-carousel';

export default function Tutorial({navigation}) {

    const [activeIndex, setActiveIndex] = useState(0)
    // const [carousel, setCarousel] = useState({})
    const [carouselItems, setCarouselItems] = useState([
        {
            title:"Paso 1",
            text: "Iniciar Sesión o registrarse",
        },
        {
            title:"Paso 2",
            text: "ir a la sección de restaurantes y elegir un restaurante",
        },
        {
            title:"Paso 3",
            text: "Elegir el platillo que guste y complete sus datos",
        },
        {
          title:"Paso 4",
          text: "Listo, se lo enviamos en minutos",
        }
    ])
    useEffect(() => {
      
        // AsyncStorage.getItem('tutorial').then(
        //   value =>{
        //     console.log("tutorial- ", value)
        //     if(value){
        //       navigation.navigate("Index")
        //     }
        //   }
        // )
      }, [])
    
    const saltarTutorial = async () => {
        await AsyncStorage.setItem('tutorial', 'true')
        navigation.navigate('Index')
    }

    function _renderItem({item,index}) {
        return (
          <View style={{
              backgroundColor:'#FDFDFD',
              borderRadius: 5,
              height: '100%',
              marginLeft: wp(5),
              marginRight: wp(5),
              // padding: wp(5),

              paddingTop: wp(5),
              paddingLeft: wp(5),
              paddingRight: wp(5),

               }}>
                  <View style={{
                    backgroundColor:'#EDEDED',
                    height: '80%',
                    borderRadius: 5,
                     }}>

                  </View>
                  <View style={{flex: 1}}>
                    <Text style={{fontSize: 20, width: 80, borderColor:'#1B5050', color: '#1B5050', borderBottomWidth: 4}}>{item.title}</Text>
                    <Text style={{color: '#1B5050', textAlign: 'center', fontSize: 12}}>{item.text}</Text>
                  </View>
          </View>

        )
    }

        return (
            <>
          <SafeAreaView style={{flex: 1, 
            // backgroundColor:'#00a680', 
            paddingTop: hp(5), 
            // paddingBottom: hp(0)  
            }}>
          <LinearGradient
                    colors={['#00a680', '#115B37']}
                    style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: hp(100),
                    }}/>
            <View style={{ 
              // flex: 1, 
              flexDirection:'row', 
              // justifyContent: 'center'
              }}>
                <Carousel
                  layout={'default'}
                  loop
                  // ref={(c) => { setCarousel(c) }}
                  // ref={(c) => { setTimeout(() => c.snapToNext(), 250) }}
                  data={carouselItems}
                  sliderWidth={wp(100)}
                  
                  itemWidth={wp(85)}
                  renderItem={_renderItem}
                  onSnapToItem = { index => setActiveIndex(index) } 
                />
            </View>
          </SafeAreaView>
          <Pagination
              dotsLength={carouselItems.length}
              activeDotIndex={activeIndex}
              containerStyle={{ backgroundColor: 'transparent', paddingTop: 3, paddingBottom:3 }}
              dotStyle={{
                  width: 15,
                  height: 15,
                  borderRadius: 15/2,
                  backgroundColor: '#EDEDED'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />

            <View style={styles.viewBtn}>
                <Button
                    buttonStyle={styles.btnStyle}
                    containerStyle={styles.btnContainer}
                    title="Continuar"
                    disabled={(activeIndex==3)?false:true}
                    disabledStyle={{backgroundColor:'rgba(34, 181, 110, 0.1)'}}
                    onPress={saltarTutorial}
                />
            </View>
          </>
        );
}
const styles = StyleSheet.create({

    viewBtn: {
        // flex: 1,
        alignItems: 'center',
        padding: 15,
        backgroundColor: "#EDEDED",
        borderTopLeftRadius: wp(100)/2,
        borderTopRightRadius: wp(100)/2,
    },
    btnStyle: {
        backgroundColor: "#00a680",
    },
    btnContainer: {
        width: "60%"
    }
  });