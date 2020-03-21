import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { colorWhite, colorPrimary3, colorPrimary2 } from '../../../../styles/Colors';
import { shadow } from '../../../../styles/Shadows';

export default StyleSheet.create({
  container: {
    paddingHorizontal: wp(6),
    marginBottom: hp(4),
  },
  subcontainer: {
    backgroundColor: colorPrimary3,
    paddingVertical: hp(2),
    borderRadius: wp(2),
    ...shadow
  },
  text1: {
    color: colorPrimary2,
    fontWeight: 'bold',
    fontSize: hp(3),
    textAlign: 'center'
  },
  text2: {
    color: colorPrimary2,
    fontWeight: 'bold',
    fontSize: hp(3),
    textAlign: 'center'
  },
  text3: {
    color: colorPrimary2,
    textAlign: 'center'
  }
});