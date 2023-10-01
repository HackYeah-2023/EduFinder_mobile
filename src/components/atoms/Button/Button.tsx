import { Colors, Typography } from '_styles';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
}

const Button = ({ label, onPress, style }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[s.container, style]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const s = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: Colors.LIGHTBLUE,
    borderRadius: 50,
    borderWidth: 2,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
  },
});
