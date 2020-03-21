import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { colorPrimary2, colorPrimary1, colorWhite } from '../../styles/Colors';
import Background from '../../styles/Background';

export default StyleSheet.create({
  container: {
    backgroundColor: colorPrimary2,
    position: 'relative'
  },
  header: {
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: hp(3),
    fontWeight: 'bold',
    color: colorWhite,
  },
  background: {
    ...Background.background1
  }
});