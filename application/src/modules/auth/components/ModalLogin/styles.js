import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { colorInput1, colorWhite, colorPrimary1, colorInput2, colorPrimary2} from '../../../../styles/Colors';
import { shadow } from '../../../../styles/Shadows';
import { input2 } from '../../../../styles/Inputs';
import Buttons from '../../../../styles/Buttons';

export default StyleSheet.create({
  image: {
    alignItems: 'center',
    marginBottom: hp(3)
  },
  imageBtn: {
    alignItems: 'center',
    backgroundColor: '#45619d',
    width: wp(40),
    paddingHorizontal: wp(2),
    paddingVertical: hp(1.5),
    borderRadius: wp(1)
  },
  imageTextF: {
    color: colorWhite,
    fontSize: hp(2.7),
    fontWeight: 'bold'
  },
  imageImage: {
    width: wp(20),
    height: hp(20)
  },
  inputs: {
    marginBottom: hp(3)
  },
  input: {
    ...input2,
    borderColor: colorInput1,
    borderWidth: hp(.4),
    fontSize: hp(2.3)
  },
  containerBtn: {
    alignItems: 'center',
    marginTop: hp(10)
  },
  btn: {
    ...Buttons.btnSmall,
    backgroundColor: colorWhite,
    width: wp(50),
    alignItems: 'center'
  },
  btnText: {
    color: colorPrimary2,
    fontWeight: 'bold',
    fontSize: hp(2.7),
    paddingVertical: hp(1),
    textAlign: 'center'
  },
  or: {
    marginBottom: hp(3)
  },
  formHeader: {
    marginBottom: hp(4)
  },
  text: {
    fontSize: hp(2.4),
    color: colorPrimary1,
    textAlign: 'center'
  }
});

   