import { Entypo, Feather } from '@expo/vector-icons';
import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Item, SearchBar } from '_atoms';
import { Wrapper } from '_screens';
import { Colors, Typography } from '_styles';
import { AppNavigatorParamsList, AppRoutes } from '_types';
import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

export interface HomeProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<AppNavigatorParamsList, AppRoutes.Home>,
    NativeStackNavigationProp<AppNavigatorParamsList, AppRoutes>
  >;
}

interface SchoolItem {
  schoolName: string;
  city: string;
  street: string;
  number: string;
  likes: number;
  isLiked: boolean;
}

const Home = ({ navigation }: HomeProps) => {
  const [data, setData] = useState<SchoolItem[]>([]);
  const dummyData = [
    'Dolnośląskie',
    'Kujawsko-Pomorskie',
    'Lubelskie',
    'Lubuskie',
    'Łódzkie',
    'Małopolskie',
    'Mazowieckie',
    'Opolskie',
    'Podkarpackie',
    'Podlaskie',
    'Pomorskie',
    'Śląskie',
    'Świętokrzyskie',
    'Warmińsko-Mazurskie',
    'Wielkopolskie',
    'Zachodniopomorskie',
  ];

  const schoolData = dummyData.map((region, index) => ({
    schoolName: `School ${index + 1}`,
    city: `City ${index + 1}`,
    street: `Street ${index + 1}`,
    number: `123${index + 1}`,
    likes: 2, // Losowa liczba od 0 do 99
    isLiked: true, // Losowa wartość true lub false
  }));

  //   const handleLikePress = (index: number) => {
  //     // Create a copy of the data array
  //     const newData = [...data];
  //     // Toggle the isLiked property for the item at the given index
  //     newData[index].isLiked = !newData[index].isLiked;
  //     // Update the state with the new data
  //     setData(newData);
  //   };

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
          <Text style={s.headerText}>EDUAPP</Text>
          <Image
            style={{ width: 105, height: 105 }}
            source={require('_assets/logo.png')}
          />
        </View>
        <View style={s.searchContainer}>
          <SearchBar placeholder={'Xs'} onSearch={() => console.log('test')} />
          <View style={s.iconContainer}>
            <Feather name="list" size={24} color="black" />
          </View>
        </View>
        <FlatList
          data={schoolData}
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
    color: Colors.LIGHTBLUE,
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
