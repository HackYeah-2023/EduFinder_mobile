import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Select } from '_atoms';
import { useAppDispatch } from '_hooks';
import { Wrapper } from '_screens';
import { toggleTheme } from '_store/slices/theme';
import { Colors, Typography } from '_styles';
import { AppNavigatorParamsList, AppRoutes } from '_types';
import i18n from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export interface SettingsProps {
  navigation: NativeStackNavigationProp<
    AppNavigatorParamsList,
    AppRoutes.Settings
  >;
}

const Settings = ({ navigation }: SettingsProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const acctualLanguage = i18n.language;
  return (
    <Wrapper>
      <View style={s.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={s.contentWrapper}>
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons
                  style={s.back}
                  name="chevron-back-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>

              <View style={s.logoImageContainer}>
                <Ionicons name="person-circle" size={160} color={Colors.BLUE} />
                <Text style={s.title}>{t('settings')}</Text>
                <View style={s.dash} />
              </View>
              <View style={s.form}>
                <Select
                  items={[
                    { label: t('pl'), value: 'pl' },
                    { label: t('en'), value: 'en' },
                  ]}
                  value={acctualLanguage}
                  onSubmit={value => {
                    console.log('ezyk');
                    i18n.changeLanguage(value);
                  }}
                />
                <Select
                  value={''}
                  items={[
                    { label: t('light'), value: 'light' },
                    { label: t('dark'), value: 'dark' },
                  ]}
                  onSubmit={value => {
                    console.log(value);
                    console.log('theme');
                    dispatch(toggleTheme());
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default Settings;

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    marginTop: 20,
    width: '80%',
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
    marginTop: 150,
    marginBottom: 48,
  },
  logoImage: {
    width: 120,
    height: 120,
    marginTop: 32,
  },
  title: {
    fontSize: Typography.FONT_SIZE_28,
  },
  button: {
    marginTop: 20,
    backgroundColor: Colors.TRANSPARENT,
  },
  back: {
    position: 'absolute',
    left: 30,
    top: 50,
  },
  dash: {
    position: 'absolute',
    height: 4,
    width: Dimensions.get('window').width / 3.5,
    backgroundColor: Colors.BLUE,
    borderRadius: 50,
    flex: 1,
    top: 240,
  },
});
