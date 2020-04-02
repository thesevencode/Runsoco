import { StyleSheet } from 'react-native';
import { 
    widthPercentageToDP as wp, 
    heightPercentageToDP as hp 
} from 'react-native-responsive-screen';

import { 
    colorPrimary2, 
    colorPrimary1, 
    colorWhite 
} from '../../styles/Colors';

import Background from '../../styles/Backgrounds';

export default StyleSheet.create({
  container: {
    backgroundColor: colorPrimary2,
    position: 'relative'
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
});