import { colorWhite } from './Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const btn = {
  btnSmall: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    borderRadius: wp(1.5)
  },
}

export default btn;