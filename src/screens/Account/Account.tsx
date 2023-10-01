import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Select } from '_atoms';
import { Wrapper } from '_screens';
import { Colors, Typography } from '_styles';
import { AppNavigatorParamsList, AppRoutes } from '_types';
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

export interface AccountProps {
  navigation: NativeStackNavigationProp<
    AppNavigatorParamsList,
    AppRoutes.Account
  >;
}

const Account = ({ navigation }: AccountProps) => {
  const { t } = useTranslation();
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
                <Text style={s.title}>{t('account')}</Text>
                <View style={s.dash} />
              </View>
              <View style={s.form}>
                <Select
                  value={''}
                  items={[]}
                  placeholder={{ label: t('liked'), value: '' }}
                  onSubmit={value => {
                    console.log(value);
                  }}
                />

                <Button
                  label={t('logout')}
                  style={s.button}
                  onPress={() => {}}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default Account;

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
