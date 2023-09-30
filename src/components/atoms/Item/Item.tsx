import { AntDesign } from '@expo/vector-icons';
import { Colors, Typography } from '_styles';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ItemProps {
  schoolName: string;
  city: string;
  street: string;
  number: string;
  likes: number;
  isLiked: boolean;
  onPress?: () => void;
}

const Item = ({
  schoolName,
  city,
  street,
  number,
  likes,
  isLiked,
  onPress,
}: ItemProps) => {
  return (
    <View style={s.container}>
      <View style={s.leftSide}>
        <Text style={s.schoolName}>{schoolName}</Text>
        <Text style={s.text}>{city + ' ' + street + ' ' + number}</Text>
      </View>
      <View style={s.rightSide}>
        <TouchableOpacity onPress={onPress}>
          {isLiked ? (
            <AntDesign name="heart" size={30} color={Colors.RED} />
          ) : (
            <AntDesign name="hearto" size={30} color={Colors.FULLBLACK} />
          )}
        </TouchableOpacity>

        <Text style={s.likes}>{likes}</Text>
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
    borderColor: Colors.LIGHTBLUE,
    flexDirection: 'row',
    marginVertical: 5,
    marginHorizontal: 20,
  },
  leftSide: {
    flex: 0.8,
  },
  schoolName: {
    marginLeft: 20,
    fontSize: Typography.FONT_SIZE_28,
    marginVertical: 20,
  },
  text: {
    marginLeft: 20,
    fontSize: Typography.FONT_SIZE_20,
  },
  rightSide: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
  },
  likes: {
    fontSize: Typography.FONT_SIZE_20,
    marginTop: 10,
    color: `${Colors.FULLBLACK}88`,
  },
});
