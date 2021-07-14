
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../../assets/colors/index';
import {categories} from '../../../assets/data/categories';
import {popular} from '../../../assets/data/popular';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  tittleWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  subtittle: {
    fontFamily: 'LatoLatin-Light',
    fontSize: 20,
    color: colors.textDatk,
  },
  tittle: {
    fontFamily: 'LatoLatin-Bold',
    fontSize: 50,
    color: colors.secondary,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    marginTop: 30,
  }, 
  search: {
    flex: 1,
    marginLeft: 10,
    borderColor: '#CDCDCD',
    borderBottomWidth: 1,
  },
  searchText: {
    fontFamily: 'LatoLatin-Light',
    fontSize: 16,
    marginBottom: 5,
  },
  categoriesWrapper: {
    marginTop: 30,
  },
  categoriesTitle: {
  fontFamily: 'LatoLatin-Bold',
  fontSize: 18,
  paddingHorizontal: 20,
  },
  categoriesListWrapper: {
    paddingTop: 15,
    paddingBottom: 20,
  },
  categoryItemWrapper: {
    backgroundColor: '#E38574',
    marginRight: 20,
    borderRadius: 20,
  },
  categoryItemImage: {
    width: 60,
    height: 60,
    marginTop: 25,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  categoryItemTitle: {
    textAlign: 'center',
    fontFamily: 'LatoLatin-Medium',
    fontSize: 18,
    marginTop: 20,
  },
  categorySelectWrapper:{
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginTop: 20,
    width: 30,
    height: 26,
    borderRadius: 30,
    marginBottom: 26,
  },
  categorySelectIcon: {
    alignSelf: 'center',
    borderRadius: 20,
  },
  popularWrapper: {
    paddingHorizontal: 20,
  },
  popularTitle: {
    fontFamily: 'LatoLatin-Black',
    fontSize: 18,
  },
  popularTopWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
  },
  popularTopText: {
    marginLeft: 10,
    fontFamily: 'LatoLatin-Medium',
    fontSize: 14,
  },
  popularCardWrapper: {
    backgroundColor: colors.textLight,
    borderRadius: 25,
    paddingTop: 20,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  popularTitleWrapper: {
    marginTop: 20,
    paddingLeft: 20,
  },
  popularTitlesTitle: {
    fontFamily: 'LatoLatin-Bold',
    fontSize: 15,
    color: colors.textDatk,
    },
  popularTitlesWeight: {
    fontFamily: 'LatoLatin-Medium',
    fontSize: 15,
    color: colors.primary,
  },
  popularCardBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  addProductBottom: {
    backgroundColor: colors.stars,
    paddingHorizontal: 40,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25
  },
  ratingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
  },
  rating: {
    fontSize: 14,
    fontFamily: 'LatoLatin-Medium',
    color: colors.textDatk,
    marginLeft: 5,
  },
  popularCardRight: {
    marginLeft: 30,
  },
  popularCardImage: {
    width: 230,
    height: 148,
    resizeMode: 'contain',
   },
});

const Product = ({navigation, route}) => {
    const {title, weight, rating, image} = route.params;
    return (
      <View style={styles.container}>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.popularWrapper}>
            <View style={styles.popularCardWrapper}>
              <View>
                <View>
                  <View style={styles.popularTopWrapper}>
                    <Icon name="star" size={12} color={colors.primary} />
                    <Text style={styles.popularTopText}>top de la semana</Text>
                  </View>
                  <View style={styles.popularTitleWrapper}>
                    <Text style={styles.popularTitlesTitle}>{title}</Text>
                    <Text style={styles.popularTitlesWeight}>
                      Weight: {weight}
                    </Text>
                  </View>
                </View>
                <View style={styles.popularCardBottom}>
                  <View style={styles.addPizzaButton}>
                    <Icon name="plus" size={12} color={colors.textDatk} />
                  </View>
                  <View style={styles.ratingWrapper}>
                    <Icon name="heart" size={12} color={colors.textDatk} />
                    <Text style={styles.rating}>{rating}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.popularCardRight}>
                <Image source={image} style={styles.popularCardImage} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  };
  
  export default Product;