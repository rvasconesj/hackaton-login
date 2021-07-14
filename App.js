/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from './assets/colors';
import { categories } from './assets/data/categories'; 

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
});


const App = () => {

  const renderCategoryItem = ({ item }) => (
    <View style={[
      styles.categoryItemWrapper, 
      {
      backgroundColor: item.selected ? colors.secondary : colors.white,
        marginLeft: item.id === 1 ? 20 : 0,
    },
    ]}>
      <Image style={styles.categoryItemImage} source={item.image} />
      <Text style={styles.categoryItemTitle}>{item.tittle}</Text>
      <View style={[styles.categorySelectWrapper, {
        backgroundColor: item.selected ? colors.white : colors.secondary, 
      }]}>
      <Icon 
        name="heart" 
        size={15} 
        color={item.selected ? colors.secondary : colors.white} 
        style={styles.categorySelectIcon}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <Image style={styles.profileImage} 
          source={require('./assets/images/profile01.jpg')} 
          />
          <Icon name="cloud" size={30} color={colors.textDatk} />
        </View>
      </SafeAreaView>
      <View style={styles.tittleWrapper}>
        <Text style={styles.subtittle}>Beauty</Text>
        <Text style={styles.tittle}>Phuyu Store</Text>
      </View>
      <View style={styles.searchWrapper}>
      <Icon name="search" size={25} color={colors.primary} />
      <View style={styles.search}>
        <Text style={styles.searchText}>Search</Text>
      </View>
      </View>
      <View style={styles.categoriesWrapper}>
          <Text style={styles.categoriesTitle}> Categories </Text>
          <View style={styles.categoriesListWrapper}>
            <FlatList data={categories} 
            renderItem={renderCategoryItem} 
            keyExtractor={item => item.id}
            horizontal={true} />
          </View>
          </View>
    </View>
  );
};


export default App;
