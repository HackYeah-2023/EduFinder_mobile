import { Entypo, Feather } from '@expo/vector-icons';
import { RouteProp, useTheme } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Item, SearchBar } from '_atoms';
import { Wrapper } from '_screens';
import { getAllSchools } from '_services/schools/schools.methods';
import { Typography } from '_styles';
import { AppNavigatorParamsList, AppRoutes } from '_types';
import React, { useState } from 'react';
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

interface dataInterface {
  id: number;
  name: string;
  region: string;
  county: string;
  commune: string;
  city: string;
  street: string;
  number: string;
  zipCode: string;
  page: string;
  type: string;
  departments: number;
  mail: string;
  phone: string;
  foreign_languages: string;
  classes: string;
  extended_subjects: string;
  likes: number;
}

const Home = ({ navigation, route }: HomeProps) => {
  const { colors } = useTheme();
  const [query, setQuery] = useState<string>('');

  if (!route.params) {
    navigation.navigate(AppRoutes.SchoolsSearch);
    return;
  }

  const {
    params: { region, city, foreignLanguages, extendedSubject, profile },
  } = route;

  const data = getAllSchools({
    name: query ? query : 'Liceum',
    region,
    city,
    extendedSubject: [extendedSubject || ''],
    languages: [foreignLanguages || ''],
    profile: [profile || ''],
  });

  console.log(data);

  const newData: dataInterface[] = data.map(item => {
    const likes = Math.floor(Math.random() * 1000);
    return { ...item, likes };
  });

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
          <Text style={[s.headerText, { color: colors.card }]}>EduFinder</Text>
          <Image
            style={{ width: 105, height: 105 }}
            source={require('_assets/logo.png')}
          />
        </View>
        <View style={s.searchContainer}>
          <SearchBar placeholder={'Szukaj'} onSearch={text => setQuery(text)} />
          <TouchableOpacity
            style={s.iconContainer}
            onPress={() => navigation.navigate(AppRoutes.SchoolsSearch)}>
            <Feather name="list" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <FlatList
          data={newData}
          showsVerticalScrollIndicator={false}
          style={s.flatList}
          renderItem={({ item }) => (
            <Item
              schoolName={item.name}
              city={item.city}
              street={item.street}
              number={item.number}
              likes={item.likes}
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
