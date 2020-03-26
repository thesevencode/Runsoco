import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { colorInput1, colorInput2 } from './Colors'

export const input1 = {
    borderRadius: wp(1),
    borderWidth: wp(.5),
    borderColor: colorInput1,
    paddingHorizontal: wp(3) ,
    paddingVertical: hp(.8)
}
  
export const input2 = {
    borderRadius: wp(1),
    borderWidth: wp(.5),
    borderColor: colorInput2,
    paddingHorizontal: wp(2),
    paddingVertical: hp(.4),
    marginBottom: hp(2)
}