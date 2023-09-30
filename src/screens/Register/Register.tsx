import { Ionicons } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Input } from '_atoms';
import { passwordRegex } from '_constants';
import { useAppDispatch } from '_hooks';
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

export interface RegisterProps {
  navigation: NativeStackNavigationProp<
    AuthNavigatorParamsList,
    AuthRoutes.Register
  >;
  route: RouteProp<AuthNavigatorParamsList, AuthRoutes.Register>;
}

interface FormValues {
  email: string;
  password: string;
  repassword: string;
}

const Register = ({ navigation, route }: RegisterProps) => {
  const { t } = useTranslation();

  const passwordRef = useRef<TextInput>(null);
  const repasswordRef = useRef<TextInput>(null);

  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .required(t('Form.required')!)
      .email(t('FormErrors.email')!),
    password: Yup.string()
      .required(t('Register.errors.Password')!)
      .matches(passwordRegex, t('Register.errors.inValidPassword')!),
    repassword: Yup.string()
      .required(t('Register.errors.repassword')!)
      .oneOf([Yup.ref('password')], t('Register.errors.notIdentical')!),
  });
  const dispatch = useAppDispatch();

  const initialValues: FormValues = {
    email: '',
    password: '',
    repassword: '',
  };

  return (
    <Wrapper>
      <View style={s.container}>
        <Formik
          validationSchema={registerSchema}
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
                    <Text style={s.title}>{'Zarejestruj się'}</Text>
                    <View style={s.dash} />
                  </View>
                  <View style={s.form}>
                    <Input
                      label={t('')}
                      value={values.email}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      error={touched.email ? errors.email : undefined}
                      autoComplete="email"
                      textContentType="emailAddress"
                      keyboardType="email-address"
                      placeholder={t('E-mail ')!}
                      returnKeyType="next"
                      autoCapitalize="none"
                      onSubmitEditing={() => {
                        passwordRef.current?.focus();
                      }}
                    />
                    <Input
                      label={t('')}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      error={touched.password ? errors.password : undefined}
                      passwordInput
                      autoCapitalize="none"
                      placeholder={t('password')!}
                      textContentType="password"
                      returnKeyType={'go'}
                      returnKeyLabel="Log in"
                      ref={passwordRef}
                    />
                    <Input
                      label={t('')}
                      value={values.repassword}
                      onChangeText={handleChange('repassword')}
                      onBlur={handleBlur('repassword')}
                      error={touched.repassword ? errors.repassword : undefined}
                      placeholder={t('repassword')!}
                      autoCapitalize="none"
                      textContentType="password"
                      secureTextEntry={true}
                      ref={repasswordRef}
                    />

                    <Button
                      label={t('register')}
                      style={s.registerButton}
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

export default Register;

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
  formChildren: {
    marginVertical: 6,
  },
  bottomButtonText: {
    fontSize: Typography.FONT_SIZE_12,

    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  bg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  registerButton: {
    marginTop: 20,
  },
  activityIndicatorContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButtonsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: 20,
  },
  forgotPassword: {
    fontSize: Typography.FONT_SIZE_12,
    textAlign: 'right',
    marginRight: 8,
    textDecorationLine: 'underline',
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
    backgroundColor: Colors.LIGHTBLUE,
    borderRadius: 50,
    flex: 1,
    top: 270,
  },
});
