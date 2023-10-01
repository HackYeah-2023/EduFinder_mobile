import { Entypo } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Input, TextView } from '_atoms';
import { Wrapper } from '_screens';
import { Colors, Typography } from '_styles';
import { AppNavigatorParamsList, AppRoutes } from '_types';
import { Formik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as Yup from 'yup';

export interface CalculatorProps {
  navigation: NativeStackNavigationProp<
    AppNavigatorParamsList,
    AppRoutes.Calculator
  >;
}

interface FormValues {
  polishTest: string;
  mathTest: string;
  englishTest: string;
  polishPoints: string;
  mathPoints: string;
  firstTest: string;
  secondTest: string;
  evidence: boolean;
  voluntary: boolean;
  competitions: boolean;
}

const Calculator = () => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const initialValues: FormValues = {
    polishTest: '',
    mathTest: '',
    englishTest: '',
    polishPoints: '',
    mathPoints: '',
    firstTest: '',
    secondTest: '',
    evidence: false,
    voluntary: false,
    competitions: false,
  };

  const schema = Yup.object().shape({
    polishTest: Yup.string().required(t('Form.required')!),
    mathTest: Yup.string().required(t('Form.required')!),
    englishTest: Yup.string().required(t('Form.required')!),
    polishPoints: Yup.string().required(t('Form.required')!),
    mathPoints: Yup.string().required(t('Form.required')!),
    firstTest: Yup.string().required(t('Form.required')!),
    secondTest: Yup.string().required(t('Form.required')!),
    evidence: Yup.boolean(),
    voluntary: Yup.boolean(),
    competitions: Yup.boolean(),
  });

  return (
    <Wrapper>
      <View style={s.container}>
        <View style={s.header}>
          <Entypo
            style={s.icon}
            name="dots-three-horizontal"
            size={25}
            color="black"
          />
          <Text style={[s.headerText, { color: colors.card }]}>EDUAPP</Text>
          <Image
            style={{ width: 105, height: 105 }}
            source={require('_assets/logo.png')}
          />
        </View>
        <Formik
          validationSchema={schema}
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
            <ScrollView style={s.container}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={s.head}>{'Egzamin Ósmoklasisty'}</Text>
                <View style={s.dash}></View>
              </View>

              <View style={{ marginHorizontal: 40 }}>
                <View style={{ marginBottom: 15 }}>
                  <TextView label={'Język Polski'} />
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 10,
                    }}>
                    <Input
                      label={''}
                      value={values.polishTest}
                      onChangeText={handleChange('polishTest')}
                      onBlur={handleBlur('polishTest')}
                      error={
                        touched.polishTest ? errors.polishPoints : undefined
                      }
                      autoCapitalize="none"
                      placeholder={t('Wynik %')!}
                    />
                    <View style={{ marginHorizontal: 10 }} />
                    <Input
                      label={''}
                      disabled
                      value={values.polishTest}
                      onChangeText={handleChange('polishTest')}
                      onBlur={handleBlur('polishTest')}
                      error={
                        touched.polishTest ? errors.polishPoints : undefined
                      }
                      autoCapitalize="none"
                      placeholder={t('Punkty')!}
                    />
                  </View>
                </View>
                <View style={{ marginBottom: 15 }}>
                  <TextView label={'Język Polski'} />
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 10,
                    }}>
                    <Button label={'TAK'} onPress={() => {}} />
                    <View style={{ marginHorizontal: 10 }} />
                    <Button label={'NIE'} onPress={() => {}} />
                  </View>
                  <View style={{ paddingHorizontal: 70 }}>
                    <Input
                      label={''}
                      disabled
                      value={values.polishTest}
                      onChangeText={handleChange('polishTest')}
                      onBlur={handleBlur('polishTest')}
                      error={
                        touched.polishTest ? errors.polishPoints : undefined
                      }
                      autoCapitalize="none"
                      placeholder={t('Punkty')!}
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

export default Calculator;

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 20,
  },
  headerText: {
    marginLeft: 50,
    fontSize: Typography.FONT_SIZE_20,
  },
  head: {
    fontSize: Typography.FONT_SIZE_30,
    textAlign: 'center',
  },
  dash: {
    height: 4,
    width: Dimensions.get('window').width / 3.5,
    backgroundColor: Colors.LIGHTBLUE,
    borderRadius: 50,
    marginTop: 50,
    marginBottom: 50,
  },
});
