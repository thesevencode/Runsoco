import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { colorWhite, colorPrimary2 } from '../../../../styles/Colors'
import { shadow } from '../../../../styles/Shadows';

export default StyleSheet.create({
  container: {
    backgroundColor: colorWhite,
    width: wp(45),
    marginBottom: hp(2),
    height: hp(25),
    borderRadius: wp(2),
    overflow: 'hidden',
    ...shadow
  },
  image: {
    width: '100%',
    height: '80%'
  },
  text: {
    color: colorPrimary2,
    fontSize: hp(2.5),
    fontWeight: 'bold',
    textAlign: 'center',
    height: '20%',
    paddingTop: hp(.7)
  }
});