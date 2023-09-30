import { Entypo, Feather } from '@expo/vector-icons';
import { CompositeNavigationProp, useTheme } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Item, SearchBar } from '_atoms';
import { Wrapper } from '_screens';
import { useSchoolsFilterQuery } from '_services/schools/schools';
import { Typography } from '_styles';
import { AppNavigatorParamsList, AppRoutes } from '_types';
import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

export interface HomeProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<AppNavigatorParamsList, AppRoutes.Home>,
    NativeStackNavigationProp<AppNavigatorParamsList, AppRoutes>
  >;
  route: AppNavigatorParamsList[AppRoutes.Home];
}

interface SchoolItem {
  schoolName: string;
  city: string;
  street: string;
  number: string;
  likes: number;
  isLiked: boolean;
}

const Home = ({ navigation, route }: HomeProps) => {
  const { colors } = useTheme();

  const { region, city, foreignLanguages, extendedSubject, profile } =
    //@ts-ignore
    route?.params;

  console.log(
    'region: ',
    region,
    'city: ',
    city,
    'foreignLanguages: ',
    foreignLanguages,
    'extendedSubject: ',
    extendedSubject,
    'profile: ',
    profile,
  );

  const { data } = useSchoolsFilterQuery({
    region,
    city,
    languages: foreignLanguages,
    extendedSubject,
    profile,
  });

  return (
    <Wrapper>
      <View style={s.container}>
        <View style={s.header}>
          <Entypo
            style={s.icon}
            name="dots-three-horizontal"
            size={25}
            color="black"
          />
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
