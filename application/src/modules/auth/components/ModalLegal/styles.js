import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { colorInput1, colorWhite, colorPrimary1, colorInput2, colorPrimary2 } from '../../../../styles/Colors';
import { shadow } from '../../../../styles/Shadows';
import { input2 } from '../../../../styles/Inputs';
import Buttons from '../../../../styles/Buttons';

export default StyleSheet.create({
  imageText: {
    paddingHorizontal: wp(10)
  },
  imageImage: {
    width: wp(30),
    height: hp(20)
  },
  btn: {
    width: wp(70)
  },
  text: {
    fontSize: hp(2.7),
    textAlign: 'center'
  },
  text1: {
    marginBottom: hp(2)
  },
  subtext: {
    color: colorPrimary1,
  }
});

   