import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { colorWhite } from '../../styles/Colors';

export default StyleSheet.create({
  container: {
    paddingHorizontal: wp(2),
    paddingTop: hp(2),
    flex: 1,
    backgroundColor: colorWhite
  },
  subcontainer: {
    height: hp(53)
  }
});