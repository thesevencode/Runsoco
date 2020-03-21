import React from 'react';
import { View, ScrollView } from 'react-native';

import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import CategoryItem from './components/CategoryItem/CategoryItem';

import styles from './styles';

function CategoriesScreen({ navigation }) {
  return (
    <>
      <HeaderNavigation />
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <CategoryItem url="https://arequipa.app/img/portada/la-miel-pasteleria-arequipa.jpeg" title="Pasteleria" />
          <CategoryItem url="https://media.timeout.com/images/105324087/630/472/image.jpg" title="Licoreria" />
          <CategoryItem url="https://media-cdn.tripadvisor.com/media/photo-s/0f/87/20/b1/puedes-elegir-entre-una.jpg" title="Polleria" />
          <CategoryItem url="https://media-cdn.tripadvisor.com/media/photo-s/03/cc/b2/63/getlstd-property-photo.jpg" title="Pizzeria" />
          <CategoryItem url="https://diariocorreo.pe/resizer/ztyjgeRPEDzx5Jv8YRCtKITDbWA=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/FMBQZR3VLJELTK5XS2X633GIII.jpg" title="Cevicheria" />
          <CategoryItem url="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQIPbvnz50exP_2HoWl3rWMEVTLWmzL_WwoARRDNM3arel9uZUn" title="Hamburgueseria" />
        </View>
      </ScrollView>
    </>
  );
}

export default CategoriesScreen;