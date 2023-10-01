import { Entypo } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button, Input, TextView } from '_atoms';
import { Colors, Typography } from '_styles';
import { AppNavigatorParamsList, AppRoutes } from '_types';
import { LinearGradient } from 'expo-linear-gradient';
import { Formik } from 'formik';
import React, { useState } from 'react';
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
  englishPoints: string;
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

  const [specialPoints, setSpecialPoints] = useState('Punkty');
  const [volunterPoints, setVolunterPoints] = useState('Punkty');

  const initialValues: FormValues = {
    polishTest: '',
    mathTest: '',
    englishTest: '',
    englishPoints: '',
    polishPoints: '',
    mathPoints: '',
    firstTest: '',
    secondTest: '',
    evidence: false,
    voluntary: false,
    competitions: false,
  };

  const schema = Yup.object().shape({
    polishTest: Yup.string(),
    mathTest: Yup.string(),
    englishTest: Yup.string(),
    englishPoints: Yup.string(),
    polishPoints: Yup.string(),
    mathPoints: Yup.string(),
    firstTest: Yup.string(),
    secondTest: Yup.string(),
    evidence: Yup.boolean(),
    voluntary: Yup.boolean(),
    competitions: Yup.boolean(),
  });

  return (
    <LinearGradient
      colors={[colors.background, Colors.LIGHTGREEN]}
      start={[0.2, 0.5]}
      style={s.container}>
      <View style={s.container}>
        <View style={s.header}>
          <Entypo
            style={s.icon}
            name="dots-three-horizontal"
            size={25}
            color="black"
          />
          <Text style={[s.headerText, { color: Colors.GREEN }]}>EduFinder</Text>
          <Image
            style={{ width: 105, height: 105 }}
            source={require('_assets/glogo.png')}
          />
        </View>
        <Formik
          validationSchema={schema}
          initialValues={initialValues}
          onSubmit={() => {}}>
          {({
            values,
            handleChange,
            handleBlur,
            isSubmitting,
            handleSubmit,
            touched,
          }) => (
            <ScrollView
              style={s.container}
              showsVerticalScrollIndicator={false}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={s.head}>{t('Kalkulator')!}</Text>
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
                      calculator
                      label={''}
                      value={values.polishTest}
                      onChangeText={handleChange('polishTest')}
                      onBlur={handleBlur('polishTest')}
                      autoCapitalize="none"
                      placeholder={t('Wynik %')!}
                    />
                    <View style={{ marginHorizontal: 10 }} />
                    <Input
                      isGreen
                      calculator
                      label={''}
                      disabled
                      value={String(
                        Math.floor(Number(values.polishTest) * 0.35),
                      )}
                      onChangeText={handleChange('polishTest')}
                      onBlur={handleBlur('polishTest')}
                      autoCapitalize="none"
                      placeholder={t('Punkty')!}
                    />
                  </View>
                </View>

                <View style={{ marginBottom: 15 }}>
                  <TextView label={'Matematyka'} />
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 10,
                    }}>
                    <Input
                      calculator
                      label={''}
                      value={values.mathTest}
                      onChangeText={handleChange('mathTest')}
                      onBlur={handleBlur('mathTest')}
                      autoCapitalize="none"
                      placeholder={t('Wynik %')!}
                    />
                    <View style={{ marginHorizontal: 10 }} />
                    <Input
                      isGreen
                      calculator
                      label={''}
                      disabled
                      value={String(Math.floor(Number(values.mathTest) * 0.35))}
                      onChangeText={handleChange('mathTest')}
                      onBlur={handleBlur('mathTest')}
                      autoCapitalize="none"
                      placeholder={t('Punkty')!}
                    />
                  </View>
                </View>

                <View style={{ marginBottom: 15 }}>
                  <TextView label={'Język Angieslki'} />
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 10,
                    }}>
                    <Input
                      calculator
                      label={''}
                      value={values.englishTest}
                      onChangeText={handleChange('englishTest')}
                      onBlur={handleBlur('englishTest')}
                      autoCapitalize="none"
                      placeholder={t('Wynik %')!}
                    />
                    <View style={{ marginHorizontal: 10 }} />
                    <Input
                      isGreen
                      calculator
                      label={''}
                      disabled
                      value={String(
                        Math.floor(Number(values.polishTest) * 0.3),
                      )}
                      onChangeText={handleChange('englishTest')}
                      onBlur={handleBlur('englishTest')}
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
                    <Input
                      calculator
                      label={''}
                      value={values.polishPoints}
                      onChangeText={handleChange('polishPoints')}
                      onBlur={handleBlur('polishPoints')}
                      autoCapitalize="none"
                      placeholder={t('Wpisz ocenę')!}
                    />
                    <View style={{ marginHorizontal: 10 }} />
                    <Input
                      isGreen
                      calculator
                      label={''}
                      disabled
                      value={String(
                        Math.floor(Number(values.polishPoints) * 3.5),
                      )}
                      onChangeText={handleChange('polishPoints')}
                      onBlur={handleBlur('polishPoints')}
                      autoCapitalize="none"
                      placeholder={t('Punkty')!}
                    />
                  </View>
                </View>

                <View style={{ marginBottom: 15 }}>
                  <TextView label={'Matematyka'} />
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 10,
                    }}>
                    <Input
                      calculator
                      label={''}
                      value={values.mathPoints}
                      onChangeText={handleChange('mathPoints')}
                      onBlur={handleBlur('mathPoints')}
                      autoCapitalize="none"
                      placeholder={t('Wpisz ocenę')!}
                    />
                    <View style={{ marginHorizontal: 10 }} />
                    <Input
                      isGreen
                      calculator
                      label={''}
                      disabled
                      value={String(
                        Math.floor(Number(values.mathPoints) * 3.5),
                      )}
                      onChangeText={handleChange('mathPoints')}
                      onBlur={handleBlur('mathPoints')}
                      autoCapitalize="none"
                      placeholder={t('Punkty')!}
                    />
                  </View>
                </View>

                <View style={{ marginBottom: 15 }}>
                  <TextView label={'Język Angieslki'} />
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 10,
                    }}>
                    <Input
                      calculator
                      label={''}
                      value={values.englishPoints}
                      onChangeText={handleChange('englishPoints')}
                      onBlur={handleBlur('englishPoints')}
                      autoCapitalize="none"
                      placeholder={t('Wpisz ocenę')!}
                    />
                    <View style={{ marginHorizontal: 10 }} />
                    <Input
                      isGreen
                      calculator
                      label={''}
                      disabled
                      value={String(
                        Math.floor(Number(values.mathPoints) * 3.5),
                      )}
                      onChangeText={handleChange('englishTest')}
                      onBlur={handleBlur('englishTest')}
                      autoCapitalize="none"
                      placeholder={t('Punkty')!}
                    />
                  </View>
                </View>

                <View style={{ marginBottom: 15 }}>
                  <TextView label={'Świadectwo z Wyróżnieniem'} />
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 10,
                    }}>
                    <Button
                      style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        borderColor: Colors.GREEN,
                      }}
                      label={'TAK'}
                      onPress={() => {
                        setSpecialPoints('2');
                      }}
                    />
                    <View style={{ marginHorizontal: 10 }} />
                    <Button
                      style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        borderColor: Colors.GREEN,
                      }}
                      label={'NIE'}
                      onPress={() => {
                        setSpecialPoints('0');
                      }}
                    />
                  </View>
                  <View style={{ paddingHorizontal: 70 }}>
                    <Input
                      isGreen
                      calculator
                      label={''}
                      disabled
                      value={specialPoints}
                      onChangeText={handleChange('')}
                      onBlur={handleBlur('')}
                      autoCapitalize="none"
                      placeholder={t('Punkty')!}
                    />
                  </View>
                </View>

                <View style={{ marginBottom: 15 }}>
                  <TextView label={'Wolontariat'} />
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 10,
                    }}>
                    <Button
                      style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        borderColor: Colors.GREEN,
                      }}
                      label={'TAK'}
                      onPress={() => {
                        setVolunterPoints('2');
                      }}
                    />
                    <View style={{ marginHorizontal: 10 }} />
                    <Button
                      style={{
                        flex: 1,
                        backgroundColor: 'transparent',
                        borderColor: Colors.GREEN,
                      }}
                      label={'NIE'}
                      onPress={() => {
                        setVolunterPoints('0');
                      }}
                    />
                  </View>
                  <View style={{ paddingHorizontal: 70 }}>
                    <Input
                      isGreen
                      calculator
                      label={''}
                      disabled
                      value={volunterPoints}
                      onChangeText={handleChange('')}
                      onBlur={handleBlur('')}
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
    </LinearGradient>
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
    backgroundColor: Colors.GREEN,
    borderRadius: 50,
    marginTop: 50,
    marginBottom: 50,
  },
});
