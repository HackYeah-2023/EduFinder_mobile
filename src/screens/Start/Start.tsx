import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { Button } from '_atoms';
import { useAppDispatch } from '_hooks';
import { login, logout } from '_store/slices/auth';
import { Colors } from '_styles';
import { getToken, getTokenData } from '_utils';
import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Animated, StyleSheet, Text, View } from 'react-native';

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
      return;
    }
    checkToken();
  });

  const animationProgress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    unsubscribe();
    Animated.timing(animationProgress, {
      toValue: 1,
      duration: 3500,
      useNativeDriver: true,
    }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={s.screen}>
      <Text style={{ color: Colors.FULLWHITE }}>Start</Text>
      <Button
        label={'Szukaj'}
        onPress={() => {
          console.log('clicked');
        }}
      />
    </View>
  );
};

export default Start;

const s = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.FULLWHITE,
  },
  lottie: {
    backgroundColor: Colors.FULLBLACK,
    marginBottom: 50,
  },
});
