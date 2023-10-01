import { CompositeNavigationProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Select } from '_atoms';
import { Wrapper } from '_screens';
import { options, regionsConverted } from '_services/schools/options-data';
import { Colors, Typography } from '_styles';
import { AppNavigatorParamsList, AppRoutes } from '_types';
import { Formik } from 'formik';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Yup from 'yup';
export interface SchoolsSearchProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<AppNavigatorParamsList, AppRoutes.SchoolsSearch>,
    NativeStackNavigationProp<AppNavigatorParamsList, AppRoutes>
  >;
}

interface FormValues {
  region: string;
  city: string;
  foreignLanguages: string;
  extendedSubject: string;
  profile: string;
}

const SchoolsSearch = ({ navigation }: SchoolsSearchProps) => {

  const loginSchema = Yup.object().shape({
    region: Yup.string().required(),
    city: Yup.string().required(),
    foreignLanguages: Yup.string().required(),
    extendedSubject: Yup.string().required(),
    profile: Yup.string().required(),
  });
  const regionsArray = Object.entries(regionsConverted).map(([key, value]) => ({
    label: value,
    value: key,
  }));

  const initialValues: FormValues = {
    region: '',
    city: '',
    foreignLanguages: '',
    extendedSubject: '',
    profile: '',
  };
  console.log(regionsArray);
  const submit = (values: FormValues) => {
    navigation.navigate(AppRoutes.Home, values);
  };

  return (
    <Wrapper>
      <View style={s.container}>
        <Text style={s.header}>{'Jakie masz preferencje?'}</Text>
        <Text style={s.text}>
          {'wprowadź dane, które pomogą nam znaleźć szkołę idealną dla Ciebie!'}
        </Text>
        <Formik
          validationSchema={loginSchema}
          initialValues={initialValues}
          onSubmit={submit}>
          {({ values, errors, handleChange, handleSubmit, touched }) => (
            <View style={s.form}>
              <Select
                value={values.region}
                items={regionsArray}
                placeholder={{ label: 'Województwo', value: '' }}
                onSubmit={handleChange('region')}
                error={touched.region ? errors.region : undefined}
              />
              <Select
                value={values.city}
                items={options?.cities.map((item: any) => ({
                  label: item,
                  value: item,
                }))}
                placeholder={{ label: 'Miasto', value: '' }}
                onSubmit={handleChange('city')}
                error={touched.city ? errors.city : undefined}
              />
              <Select
                value={values.profile}
                items={options?.profiles.map((item: any) => ({
                  label: item,
                  value: item,
                }))}
                placeholder={{ label: 'Kierunek', value: '' }}
                onSubmit={handleChange('profile')}
                error={touched.profile ? errors.profile : undefined}
              />
              <Select
                value={values.extendedSubject}
                items={options?.extended_subjects.map((item: any) => ({
                  label: item,
                  value: item,
                }))}
                placeholder={{ label: 'Rozszerzone przedmioty', value: '' }}
                onSubmit={handleChange('extendedSubject')}
                error={
                  touched.extendedSubject ? errors.extendedSubject : undefined
                }
              />
              <Select
                value={values.foreignLanguages}
                items={options?.foreign_languages.map((item: any) => ({
                  label: item,
                  value: item,
                }))}
                placeholder={{ label: 'Języki obce', value: '' }}
                onSubmit={handleChange('foreignLanguages')}
                error={
                  touched.foreignLanguages ? errors.foreignLanguages : undefined
                }
              />

              <View style={{ paddingHorizontal: 40 }}>
                <Button
                  label={'Zaczynamy!'}
                  style={{
                    marginTop: 30,
                    backgroundColor: Colors.BLUE,
                    borderColor: Colors.BLUE,
                  }}
                  onPress={handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Wrapper>
  );
};

export default SchoolsSearch;

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: Typography.FONT_SIZE_30,
    textAlign: 'center',
  },
  text: {
    fontSize: Typography.FONT_SIZE_20,
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  form: {
    marginTop: 30,
    paddingHorizontal: 30,
  },
});
