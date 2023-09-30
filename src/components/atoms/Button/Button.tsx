import { Colors, Typography } from '_styles';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
}

const Button = ({ label, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity style={s.container} onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const s = StyleSheet.create({
  container: {
    height: 61,
    backgroundColor: Colors.LIGHTBLUE,
    borderRadius: 50,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: Colors.FULLWHITE,
    fontSize: Typography.FONT_SIZE_20,
  },
});
