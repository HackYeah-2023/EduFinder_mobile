import { Entypo, Feather } from '@expo/vector-icons';
import { RouteProp, useTheme } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Item, SearchBar } from '_atoms';
import { Wrapper } from '_screens';
import { Typography } from '_styles';
import { AppNavigatorParamsList, AppRoutes } from '_types';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export interface HomeProps {
  navigation: NativeStackNavigationProp<AppNavigatorParamsList, AppRoutes.Home>;
  route: RouteProp<AppNavigatorParamsList, AppRoutes.Home>;
}

const Home = ({ navigation, route }: HomeProps) => {
  const { colors } = useTheme();
  const {
    params: { region, city, foreignLanguages, extendedSubject, profile },
  } = route;

  const data = [
    { label: 'test', value: 'test' },
    { label: 'test', value: 'test' },
  ];

  return (
    <Wrapper>
      <View style={s.container}>
        <View style={s.header}>
          <TouchableOpacity>
            <Entypo
              style={s.icon}
              name="dots-three-horizontal"
              size={25}
              color="black"
            />
          </TouchableOpacity>
          <Text style={[s.headerText, { color: colors.card }]}>EDUAPP</Text>
          <Image
            style={{ width: 105, height: 105 }}
            source={require('_assets/logo.png')}
          />
        </View>
        <View style={s.searchContainer}>
          <SearchBar
            placeholder={'Szukaj'}
            onSearch={() => console.log('test')}
          />
          <View style={s.iconContainer}>
            <Feather name="list" size={24} color="black" />
          </View>
        </View>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          style={s.flatList}
          renderItem={({ item }) => (
            <Item
              schoolName={item.schoolName}
              city={item.city}
              street={item.street}
              number={item.number}
              likes={item.likes}
              isLiked={item.isLiked}
            />
          )}
        />
      </View>
    </Wrapper>
  );
};

export default Home;

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 20,
  },
  headerText: {
    marginLeft: 50,
    fontSize: Typography.FONT_SIZE_20,
  },
  searchContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
  },
  flatList: {
    marginTop: 10,
  },
});
