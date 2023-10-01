import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { useAppDispatch } from '_hooks';
import { Wrapper } from '_screens';
import { login, logout } from '_store/slices/auth';
import { getToken, getTokenData } from '_utils';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Image, StyleSheet, View } from 'react-native';
import Animated, { FadeInDown, runOnJS } from 'react-native-reanimated';

interface StartProps {
  setIsLoading: (loading: boolean) => void;
}

const Start = ({ setIsLoading }: StartProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const checkToken = async () => {
    const token = await getToken();
    if (token) {
      // const refreshedToken = await refreshToken(token);
      // console.log('refreshedToken', refreshedToken);
      // if (!refreshedToken) {
      //   return null;
      // }
      const tokenData = getTokenData(token);
      if (tokenData !== null) {
        dispatch(login(tokenData));
      } else {
        AsyncStorage.clear();
        dispatch(logout());
      }
    } else {
      AsyncStorage.clear();
      dispatch(logout());
    }
    setIsLoading(false);
  };

  const unsubscribe = NetInfo.addEventListener(({ isConnected }) => {
    if (!isConnected) {
      Alert.alert(
        t('Alerts.noConnectionHeader'),
        t('Alerts.noConnectionBody')!,
      );
      setIsLoading(true);
    }
    // checkToken();
  });

  useEffect(() => {
    unsubscribe();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <View style={s.container}>
        <Animated.View
          entering={FadeInDown.duration(3000).withCallback(() => {
            'worklet';
            runOnJS(setIsLoading)(false);
          })}>
          <Image
            style={{ width: 250, height: 250 }}
            source={require('_assets/logo.png')}
          />
        </Animated.View>
      </View>
    </Wrapper>
  );
};

export default Start;

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
