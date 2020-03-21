import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { input1 } from '../../../../styles/Inputs';
import { colorWhite, colorInput1 } from '../../../../styles/Colors';
import { shadow } from '../../../../styles/Shadows';

export default StyleSheet.create({
  container: {
    backgroundColor: colorWhite,
    borderRadius: wp(2),
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    position: 'relative',
    marginBottom: hp(2),
    ...shadow
  },
  input: {
    ...input1,
    fontSize: hp(2.5), 
  },
  text: {
    fontSize: hp(2.8),
    textAlign: 'center',
    marginBottom: hp(2),
    fontWeight: 'bold'
  },
  icon: {
    position: 'absolute',
    bottom: hp(3.8),
    fontSize: hp(2.8),
    right: wp(8),
    color: colorInput1
  }
});