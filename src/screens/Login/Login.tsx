import { Ionicons } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Input } from '_atoms';
import { Wrapper } from '_screens';
import { Colors, Typography } from '_styles';
import { AuthNavigatorParamsList, AuthRoutes } from '_types';
import { Formik } from 'formik';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Yup from 'yup';

export interface LoginProps {
  navigation: NativeStackNavigationProp<
    AuthNavigatorParamsList,
    AuthRoutes.Login
  >;
  route: RouteProp<AuthNavigatorParamsList, AuthRoutes.Login>;
}

interface FormValues {
  email: string;
  password: string;
}

const Login = ({ navigation, route }: LoginProps) => {
  const { t } = useTranslation();

  const passwordRef = useRef<TextInput>(null);

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .required(t('Form.required')!)
      .email(t('FormErrors.email')!),
    password: Yup.string().required(t('Form.required')!),
  });

  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  return (
    <Wrapper>
      <View style={s.container}>
        <Formik
          validationSchema={loginSchema}
          initialValues={initialValues}
          onSubmit={() => {}}>
          {({
            values,
            errors,
            handleChange,
            handleBlur,
            isSubmitting,
            handleSubmit,
            touched,
          }) => (
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
                    <Ionicons
                      name="person-circle"
                      size={160}
                      color={Colors.LIGHTBLUE}
                    />
                    <Text style={s.title}>{t('Zaloguj się')}</Text>

                    <View style={s.dash} />
                  </View>
                  <View style={s.form}>
                    <Input
                      label={''}
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      error={touched.email ? errors.email : undefined}
                      autoComplete="email"
                      textContentType="emailAddress"
                      keyboardType="email-address"
                      placeholder={t('e-mail')!}
                      returnKeyType="next"
                      autoCapitalize="none"
                      onSubmitEditing={() => {
                        passwordRef.current?.focus();
                      }}
                    />
                    <Input
                      label={''}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      error={touched.password ? errors.password : undefined}
                      passwordInput
                      autoCapitalize="none"
                      placeholder={t('Hasło')!}
                      textContentType="password"
                      returnKeyType={'go'}
                      returnKeyLabel="Log in"
                      ref={passwordRef}
                    />

                    <Button
                      label={t('Nie pamiętam hasła')}
                      style={{
                        backgroundColor: Colors.TRANSPARENT,
                        borderColor: Colors.TRANSPARENT,
                      }}
                      onPress={() => console.log('forgot password')}
                    />

                    <Button
                      label={t('Login')}
                      style={s.loginButton}
                      onPress={handleSubmit}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          )}
        </Formik>
      </View>
    </Wrapper>
  );
};

export default Login;

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    marginTop: 90,
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
  loginButton: {
    marginTop: 20,
    fontSize: Typography.FONT_SIZE_20,
  },
  back: {
    position: 'absolute',
    left: 30,
    top: 50,
  },
  dash: {
    height: 4,
    width: Dimensions.get('window').width / 3.5,
    backgroundColor: Colors.LIGHTBLUE,
    borderRadius: 50,
  },
});
