import { StyleSheet } from 'react-native';
import { 
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp 
} from 'react-native-responsive-screen';

import { 
    colorPrimary2, 
    colorWhite 
} from '../../styles/Colors';
import Button from '../../styles/Buttons';
import Background from '../../styles/Backgrounds';

export default StyleSheet.create({
  container: {
    backgroundColor: colorPrimary2,
    position: 'relative',
    borderWidth: 1
  },
  header: {
    height: hp(9),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: hp(3.5),
    fontWeight: 'bold',
    color: colorWhite,
  },
  background: {
    ...Background.background1
  },
  logo: {
    width: wp(7),
    height: hp(5),
    marginRight: wp(.5)
  },
  logoM: {
    width: wp(48),
    height: hp(25)
  },
  containerM: {
    paddingTop: hp(5),
    alignItems: 'center',
    marginBottom: hp(4)
  },
  containerText: {
    alignItems: 'center',
    marginBottom: hp(10+2)
  },
  text1: {
    fontSize: hp(4),
    textAlign: 'center',
    marginBottom: hp(2),
    color: colorWhite
  },
  text2: {
    fontSize: hp(2.5),
    color: colorWhite
  },
  containerBtn: {
    alignItems: 'center'
  },
  btn: {
    width: wp(70),
    backgroundColor: colorWhite,
    ...Button.btnSmall,
    paddingVertical: hp(2),
    alignItems: 'center',
    marginBottom: hp(2)
  },
  btnText: {
    color: colorPrimary2,
    fontWeight: 'bold',
    fontSize: hp(2.7)
  }
});