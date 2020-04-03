import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { colorPrimary1, colorPrimary2 } from './Colors'; 

const background = {
  background1: {
    backgroundColor: colorPrimary2,
    position: 'absolute',
    width: wp(100),
    height: hp(100),
    borderTopColor: colorPrimary1,
    borderTopWidth: wp(200) / hp(.33),
    borderRightWidth: wp(500),
    borderRightColor: 'transparent',
  }
}

export default background