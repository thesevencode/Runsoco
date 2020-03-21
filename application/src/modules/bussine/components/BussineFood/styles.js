import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { colorWhite, colorPrimary3, colorPrimary2, colorPrimary1 } from '../../../../styles/Colors';
import { shadow } from '../../../../styles/Shadows';

export default StyleSheet.create({
  container: {
    backgroundColor: colorWhite,
    marginBottom: hp(1),
    paddingHorizontal: wp(5), 
    paddingTop: hp(4),
    position: 'relative',
    ...shadow
  },
  absolute: {
    position: 'absolute',
    backgroundColor: colorPrimary2,
    color: colorWhite,
    borderTopRightRadius: wp(.7),
    borderBottomRightRadius: wp(.7),
    paddingHorizontal: wp(2),
    paddingVertical: hp(.2),
    fontSize: hp(2.2)
  },
  subcontainer1: {
    flexDirection: 'row',
  },
  subcontainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(1),
    paddingVertical: hp(1),
    alignItems: 'center'
  },
  containerImage: {
    width: '30%',
    height: hp(15),
  },
  containerInfo: {
    padding: wp(3),
    flex: 1
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  text1: {
    color: colorPrimary1,
    fontWeight: 'bold',
    fontSize: hp(2.9),
  },
  text2: {
    fontSize: hp(2.4)
  },
  textPrice: {
    color: colorPrimary2,
    fontWeight: 'bold',
    fontSize: hp(2.7),
  },
  btn: {
    backgroundColor: colorPrimary3,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2)
  },
  icon: {
    color: colorPrimary1
  }
});