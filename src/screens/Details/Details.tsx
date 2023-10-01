import { AntDesign, Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { CompositeNavigationProp, useTheme } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { De, En, Es } from '_assets';
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
import MapView from 'react-native-maps';

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
          <Text style={[s.headerText, { color: colors.card }]}>EduFinder</Text>
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
            {'Zespół Szkół Elektrycznych nr 1'}
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

        <ScrollView style={s.about} showsVerticalScrollIndicator={false}>
          <View style={s.schoolInfo}>
            <Text style={{ fontSize: Typography.FONT_SIZE_20, opacity: 0.5 }}>
              {'Kraków, Kamińskiego 49'}
            </Text>
            <View style={s.flags}>
              <Es width={40} height={30} />
              <En width={40} height={30} />
              <De width={40} height={30} />
            </View>
          </View>
          <Text style={s.aboutText}>
            {'Absolwenci tej szkoły mają o 98% lepsze wyniki maturalne'}
          </Text>
          <View style={s.mapContainer}>
            <MapView
              style={s.map}
              initialRegion={{
                latitude: 50.046652,
                longitude: 19.93425,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
          </View>
          <ExtendedSubject
            label={'Programista'}
            text={'P.rozszerzony: matematyka, informatyka'}
            label_info={'Kim możesz zostać?'}
            text_info={'Programista\nAutomatyk'}
          />
          <ExtendedSubject
            label={'Automatyk'}
            text={'P.rozszerzony: fizyka, matematyka'}
            label_info={'Kim możesz zostać?'}
            text_info={'Mechatronik\nAutomatyk'}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome5 name="robot" size={30} color="black" />
            <View
              style={{
                padding: 8,
                backgroundColor: `${Colors.BLUE}77`,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                borderTopRightRadius: 25,
                borderBottomRightRadius: 25,
                marginLeft: 15,
                marginVertical: 20,
              }}>
              <Text
                style={{
                  fontSize: Typography.FONT_SIZE_22,
                  textAlign: 'center',
                  padding: 5,
                }}>
                {'Czy masz więcej pytań?'}
              </Text>
            </View>
          </View>
          <View
            style={{
              padding: 10,
              backgroundColor: Colors.BLUE,
              marginTop: 5,
              height: 55,
              marginBottom: 20,
              width: '75%',
            }}>
            <Text
              style={{
                fontSize: Typography.FONT_SIZE_22,
                textAlign: 'center',
                padding: 5,
              }}></Text>
          </View>
          <Ionicons
            style={{ position: 'absolute', right: 20, bottom: 22 }}
            name="send"
            size={40}
            color={Colors.BLUE}
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
    justifyContent: 'space-between',
    width: '50%',
    marginTop: 10,
  },
  singleFlag: {
    marginRight: 10,
  },
  about: {
    marginHorizontal: 25,
    marginTop: 5,
  },
  aboutText: {
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.GREEN,
    textAlign: 'center',
    marginTop: 20,
  },
  mapContainer: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
    marginTop: 20,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
