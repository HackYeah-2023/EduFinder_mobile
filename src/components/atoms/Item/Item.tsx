import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Typography } from '_styles';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ItemProps {
  schoolName: string;
  city: string;
  street: string;
  number: string;
  likes: number;
}

const Item = ({ schoolName, city, street, number, likes }: ItemProps) => {
  const { colors } = useTheme();
  const [liked, setLiked] = useState<boolean>(
    Math.floor(Math.random() * 10) % 2 === 0,
  );
  return (
    <View
      style={[
        s.container,
        { borderColor: colors.card, backgroundColor: `${colors.card}1A` },
      ]}>
      <View style={s.leftSide}>
        <Text numberOfLines={3} style={s.schoolName}>
          {schoolName}
        </Text>
        <Text numberOfLines={3} style={s.text}>
          {city + ' ' + street + ' ' + number}
        </Text>
      </View>
      <View style={s.rightSide}>
        <TouchableOpacity onPress={() => setLiked(!liked)}>
          {liked ? (
            <AntDesign name="heart" size={30} color={colors.notification} />
          ) : (
            <AntDesign name="hearto" size={30} color={colors.text} />
          )}
        </TouchableOpacity>
        <Text style={[s.likes, { color: `${colors.text}77` }]}>{likes}</Text>
      </View>
    </View>
  );
};

export default Item;

const s = StyleSheet.create({
  container: {
    height: 130,
    borderRadius: 20,
    borderWidth: 2,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 20,
  },
  leftSide: {
    flex: 0.8,
  },
  schoolName: {
    marginLeft: 20,
    fontSize: Typography.FONT_SIZE_20,
    marginVertical: 5,
  },
  text: {
    marginLeft: 20,
    fontSize: Typography.FONT_SIZE_14,
  },
  rightSide: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
  },
  likes: {
    fontSize: Typography.FONT_SIZE_20,
    marginTop: 10,
  },
});
