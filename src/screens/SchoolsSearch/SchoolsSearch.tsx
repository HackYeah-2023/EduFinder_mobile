import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '_atoms';
import { Wrapper } from '_screens';
import { Typography } from '_styles';
import { AppNavigatorParamsList, AppRoutes } from '_types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface SchoolsSearchProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<AppNavigatorParamsList, AppRoutes.SchoolsSearch>,
    NativeStackNavigationProp<AppNavigatorParamsList, AppRoutes>
  >;
}

const SchoolsSearch = ({ navigation }: SchoolsSearchProps) => {
  const itemsData = [
    'Województwo',
    'Miasto',
    'Kierunek',
    'Przedmioty Rozszerzone',
    'Języki',
  ];
  const items = itemsData.map(item => ({ label: item, value: item }));

  return (
    <Wrapper>
      <View style={s.container}>
        <Text style={s.header}>{'Wyszukaj\nSwoją\nWymarzoną\nSzkołę'}</Text>

        <View style={s.buttonView}>
          <Button
            label="Szukaj"
            onPress={() => {
              console.log('Clicked');
            }}
          />
        </View>
      </View>
    </Wrapper>
  );
};

export default SchoolsSearch;

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: Typography.FONT_SIZE_30,
    textAlign: 'center',
  },
  buttonView: {
    marginHorizontal: 110,
  },
});
