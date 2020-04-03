import { StyleSheet } from 'react-native';
import { 
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp 
} from 'react-native-responsive-screen';

import { 
    colorInput1, 
    colorWhite, 
    colorPrimary1, 
    colorInput2, 
    colorPrimary2 
} from '../../../styles/Colors';
import { shadow } from '../../../styles/Shadows';
import { input2 } from '../../../styles/Inputs';
import Buttons from '../../../styles/Buttons';

export default StyleSheet.create({
  container: {
    paddingHorizontal: wp(5)
  },
  form: {
    backgroundColor: colorWhite,
    borderRadius: wp(1),
    paddingHorizontal: wp(5),
    paddingTop: hp(1),
    paddingBottom: hp(4),
    ...shadow,
    marginBottom: hp(5)
  },
  formHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  formText: {
    color: colorPrimary1,
    fontWeight: 'bold'
  },
  formText1: {
    fontSize: hp(2.7)
  },
  formText2: {
    fontSize: hp(3.5)
  },
  imageText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: hp(2.7),
    marginBottom: hp(4.5)
  },
  imageBtn: {
    alignItems: 'center'
  },
  imageImage: {
    width: wp(20),
    height: hp(20)
  },
  or: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  or1: {
    width: wp(35),
    height: hp(.4),
    backgroundColor: colorInput1,
  },
  orText: {
    color: colorInput2,
    fontSize: hp(3.5),
    fontWeight: 'bold'
  },
  input: {
    ...input2,
    borderColor: colorInput1,
    borderWidth: hp(.4),
    fontSize: hp(2.7)
  },
  containerBtn: {
    alignItems: 'center'
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
  }
});

   