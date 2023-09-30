import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LoginButton } from '_atoms';
import { Colors, Typography } from '_styles';
import { AuthNavigatorParamsList, AuthRoutes } from '_types';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Wrapper from '../Wrapper/Wrapper';

export interface LandingPageProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<AuthNavigatorParamsList, AuthRoutes.LandingPage>,
    NativeStackNavigationProp<AuthNavigatorParamsList, AuthRoutes>
  >;
}

const LandingPage = ({ navigation }: LandingPageProps) => {
  return (
    <Wrapper>
      <View style={s.container}>
        <Image style={s.img} source={require('../../assets/Logo.png')} />
        <View style={s.dash}></View>

        <View style={s.buttonView}>
          <LoginButton
            label="Zaloguj się"
            onPress={() => {
              console.log('login');
            }}
          />
        </View>

        <View style={s.buttonView}>
          <LoginButton
            label="Zarejestruj się"
            onPress={() => {
              console.log('register');
            }}
          />
        </View>

        <View style={[s.buttonView, s.guest]}>
          <TouchableOpacity style={s.guest} activeOpacity={0.6}>
            <Text style={s.label}>Przeglądaj jako gość</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Wrapper>
  );
};

export default LandingPage;

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonView: {
    marginHorizontal: 50,
    marginVertical: 15,
  },
  dash: {
    marginTop: -70,
    marginBottom: 30,
    marginHorizontal: 140,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: Colors.LIGHTBLUE,
  },
  guest: {
    marginTop: 30,
    alignItems: 'center',
  },
  img: {
    width: 334,
    height: 334,
    marginHorizontal: 15,
  },
  label: {
    fontSize: Typography.FONT_SIZE_20,
    opacity: 0.5,
  },
});
