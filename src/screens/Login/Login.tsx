import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, LoginButton } from '_atoms';
import { Colors } from '_styles';
import { AuthNavigatorParamsList, AuthRoutes } from '_types';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Wrapper from '../Wrapper/Wrapper';

export interface LoginPageProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<AuthNavigatorParamsList, AuthRoutes.Login>,
    NativeStackNavigationProp<AuthNavigatorParamsList, AuthRoutes>
  >;
}

const LandingPage = ({ navigation }: LoginPageProps) => {
  return (
    <Wrapper>
      <View style={s.container}>
        <Image style={s.img} source={require('../../assets/Logo.png')} />
        <View style={s.dash}></View>

        <View style={s.buttonView}>
          <LoginButton
            label="E-mail"
            onPress={() => {
              console.log('email');
            }}
          />
        </View>

        <View style={s.buttonView}>
          <LoginButton
            label="Hasło"
            onPress={() => {
              console.log('hasło');
            }}
          />
        </View>

        <View style={s.buttonView}>
          <LoginButton
            label="Powtórz hasło"
            onPress={() => {
              console.log('Powtórz hasło');
            }}
          />
        </View>

        <View>
          <Button
            label={'Dalej'}
            onPress={() => {
              'pressed';
            }}
          />
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
  img: {
    width: 334,
    height: 334,
    marginHorizontal: 15,
  },
});
