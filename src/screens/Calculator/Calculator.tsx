import { Entypo } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { TextView } from '_atoms';
import { Colors, Typography } from '_styles';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Wrapper from '../Wrapper/Wrapper';

const Calculator = () => {
  const { colors } = useTheme();
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

        <ScrollView style={s.container}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={s.head}>{'Egzamin Ósmoklasisty'}</Text>
            <View style={s.dash}></View>
          </View>

          <View style={{ marginHorizontal: 40 }}>
            <TextView label={'Matematyka'} />
          </View>
        </ScrollView>
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
