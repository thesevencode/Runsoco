import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { colorPrimary2, colorPrimary1, colorWhite } from '../../../styles/Colors';
import Button from '../../../styles/Buttons';
import Background from '../../../styles/Backgrounds';

export default StyleSheet.create({
  background : {
    ...Background.background1,
  },
  container: {
    backgroundColor: colorPrimary2
  },
  content: {
    paddingVertical: hp(8),
    alignItems: 'center',
  },
  superiorText: {
    color:  colorWhite,
    fontSize: hp(5),
    paddingHorizontal: wp(9),
    textAlign: 'center',
    marginTop: hp(7),
    marginBottom: hp(17)
  },
  inferior: {
    alignItems: 'center'
  },
  btn: {
    ...Button.btnSmall,
    backgroundColor: colorPrimary1,
    paddingVertical: hp(3),
    width: wp(70),
    alignItems: 'center'
  },
  btnText: {
    color: colorWhite,
    fontSize: hp(3),
    fontWeight: 'bold'
  },
  image: {
    width: wp(40),
    height: hp(30)
  }
});