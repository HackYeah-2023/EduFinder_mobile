import { AntDesign, Entypo } from '@expo/vector-icons';
import { CompositeNavigationProp, useTheme } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ExtendedSubject } from '_atoms';
import { Wrapper } from '_screens';
import { Colors, Typography } from '_styles';
import { AppNavigatorParamsList, AppRoutes } from '_types';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export interface DetailsProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<AppNavigatorParamsList, AppRoutes.Details>,
    NativeStackNavigationProp<AppNavigatorParamsList, AppRoutes>
  >;
}

const Details = ({ navigation }: DetailsProps) => {
  const { colors } = useTheme();
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

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
        <View style={s.imgContainer}>
          <Image style={s.img} source={require('_assets/zsel1.jpg')}></Image>
        </View>

        <View style={s.schoolName}>
          <Text style={{ fontSize: Typography.FONT_SIZE_30 }}>
            {'Nazwa szkoły'}
          </Text>
          <View style={s.likeContainer}>
            <TouchableOpacity
              onPress={() => {
                setIsLiked(!isLiked);
                isLiked ? setLikes(likes - 1) : setLikes(likes + 1);
              }}>
              {isLiked ? (
                <AntDesign name="heart" size={30} color={colors.notification} />
              ) : (
                <AntDesign name="hearto" size={30} color={colors.text} />
              )}
            </TouchableOpacity>
            <Text>{likes}</Text>
          </View>
        </View>

        <ScrollView style={s.about}>
          <View style={s.schoolInfo}>
            <Text style={{ fontSize: Typography.FONT_SIZE_20, opacity: 0.5 }}>
              {'Miasto, ulica, numer'}
            </Text>
            <View style={s.flags}>
              <Text style={s.singleFlag}>{'flag1'}</Text>
              <Text style={s.singleFlag}>{'flag2'}</Text>
              <Text style={s.singleFlag}>{'flag3'}</Text>
            </View>
          </View>
          <Text style={s.aboutText}>
            {'Absolwenci tej szkoły mają o 98% \nlepsze wyniki maturalne'}
          </Text>

          <ExtendedSubject
            label={'Mat-Inf'}
            text={'P.rozszerzony: matematyka, informatyka'}
            label_info={'Kim możesz zostać?'}
            text_info={'Programista\nAutomatyk'}
          />
        </ScrollView>
      </View>
    </Wrapper>
  );
};

export default Details;

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
  imgContainer: {
    width: '100%',
    height: 110,
    position: 'relative',
  },
  img: {
    width: '100%',
    height: '100%',
    zIndex: 1,
    position: 'absolute',
  },
  flatList: {
    marginTop: 10,
  },
  schoolName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 25,
    marginTop: 10,
  },
  likeContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  schoolInfo: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  flags: {
    flexDirection: 'row',
    marginTop: 10,
  },
  singleFlag: {
    marginRight: 10,
  },
  about: {
    marginHorizontal: 25,
    marginTop: 25,
  },
  aboutText: {
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.GREEN,
    textAlign: 'center',
    marginTop: 20,
  },
});
