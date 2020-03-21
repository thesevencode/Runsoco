import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  scroll: {
    paddingHorizontal: wp(1.3), paddingVertical: hp(4),
  },
  container: {
    flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: wp(1.3), justifyContent: 'space-between'
  }
});