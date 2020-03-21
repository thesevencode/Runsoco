import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { colorPrimary1, colorWhite } from '../../styles/Colors'

export default StyleSheet.create({
  container: {
    backgroundColor: colorPrimary1,
    height: hp(9.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btn: {
    alignSelf: 'stretch',
    display: 'flex',
    justifyContent: 'center',
    padding: wp(7),
  },
  icon: {
    fontSize: hp(3),
    color: colorWhite
  },
  logo: {
    fontSize: hp(3),
    color: colorWhite,
    fontWeight: 'bold'
  },
  void: {
    padding: wp(5)
  }
});