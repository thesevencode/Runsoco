import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { input1 } from '../../../../styles/Inputs';
import { colorWhite, colorStars, colorPrimary2 } from '../../../../styles/Colors';

import { shadow } from '../../../../styles/Shadows';

export default StyleSheet.create({
  container: {
    backgroundColor: colorWhite,
    marginBottom: hp(1.5),
    height: hp(36),
    borderRadius: wp(1),
    overflow: 'hidden',
    ...shadow
  }, 
  image: {
    height: '70%',
    resizeMode: 'cover'
  },
  containerInfo: {
    flexDirection: 'row',
    paddingLeft: wp(2),
    justifyContent: 'space-between'
  },
  containerInfoLeft: {
    paddingTop: hp(.5)
  },
  containerStars: {
    flexDirection: 'row',
    marginBottom: hp(.5)
  },
  title: {
    color: colorPrimary2,
    fontWeight: 'bold',
    fontSize: hp(2.3),
    marginBottom: hp(.5)
  },
  icon: {
    color: colorStars,
    marginRight: wp(.5)
  },
  btn: {
    paddingHorizontal: wp(6),
    paddingVertical: hp(3)
  },
  text: {
    color: colorPrimary2,
    fontWeight: 'bold'
  }
});