import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { colorWhite, colorPrimary2, colorPrimary1 } from '../../../../styles/Colors';
import { shadow } from '../../../../styles/Shadows';
import { input2 } from '../../../../styles/Inputs';
import Button from '../../../../styles/Buttons';

export default StyleSheet.create({
  container: {
  },
  subcontainer1: {
    borderRadius: wp(.7),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    backgroundColor: colorWhite,
    position: 'relative',
    marginBottom: hp(4),
    ...shadow,
  },
  subcontainer2: { position: 'relative', paddingHorizontal: wp(3), marginBottom: hp(4), paddingTop: 0, backgroundColor: 'transparent', justifyContent: 'space-between', flexDirection: 'row' },
  line: {
    position: 'absolute',
    width: wp(.6),
    height: hp(5),
    bottom: -hp(5)
  },
  line1: {
    backgroundColor: colorPrimary2,
    left: wp(10)
  },
  line2: {
    backgroundColor: colorPrimary1,
    right: wp(10)
  },
  lineExtra: {
    bottom: -hp(5.9)
  },
  input: {
    ...input2
  },
  text1: {
    color: colorPrimary2,
    fontWeight: 'bold',
    fontSize: hp(2.7),
    marginBottom: hp(1)
  },
  text2: {
    color: colorPrimary2,
    fontSize: hp(2.7),
  },
  picker: {
    height: hp(6),
  },
  containerText: {
    marginBottom: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: hp(2.7),
    paddingLeft: wp(2),
    paddingRight: wp(6)
  },
  btn1: {
    ...Button.btnSmall,
    backgroundColor: colorPrimary2
  },
  btn2: {
    ...Button.btnSmall,
    backgroundColor: colorPrimary1
  },
  textBtn: {
    color: colorWhite,
    fontSize: hp(2.7),
  }
});