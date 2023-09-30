import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '_atoms';
import { Wrapper } from '_screens';
import { Colors } from '_styles';
import {
  AppNavigatorParamsList,
  AppRoutes,
  AuthNavigatorParamsList,
  AuthRoutes,
} from '_types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

export interface LandingPageProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<AuthNavigatorParamsList, AuthRoutes.LandingPage>,
    NativeStackNavigationProp<AppNavigatorParamsList, AppRoutes>
  >;
}

const LandingPage = ({ navigation }: LandingPageProps) => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <View style={s.contentWrapper}>
        <View style={{ flex: 1 }}>
          <View style={s.logoImageContainer}>
            <Image source={require('_assets/logo.png')} style={s.logoImage} />
            <View style={s.dash} />
          </View>
          <View style={s.form}>
            <Button
              label={t('login')}
              style={s.loginButton}
              onPress={() => navigation.navigate(AuthRoutes.Login)}
            />
            <Button
              label={t('register')}
              style={s.loginButton}
              onPress={() => navigation.navigate(AuthRoutes.Register)}
            />
            <Button
              label={t('continueAsGuest')}
              style={{
                marginTop: 60,
                backgroundColor: Colors.TRANSPARENT,
                borderColor: Colors.TRANSPARENT,
              }}
              onPress={() => navigation.navigate(AppRoutes.Home)}
            />
          </View>
        </View>
      </View>
    </Wrapper>
  );
};

export default LandingPage;
const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    width: '90%',
    alignSelf: 'center',
  },
  screen: {
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  contentWrapper: {
    justifyContent: 'center',
    flex: 1,
  },
  logoImageContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  logoImage: {
    width: 330,
    height: 330,
  },
  loginButton: {
    backgroundColor: Colors.TRANSPARENT,
    marginTop: 20,
  },
  dash: {
    position: 'absolute',
    height: 4,
    width: Dimensions.get('window').width / 3.5,
    backgroundColor: Colors.LIGHTBLUE,
    borderRadius: 50,
    flex: 1,
    top: 250,
  },
});
