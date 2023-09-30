import { useTheme } from '@react-navigation/native';
import { Typography } from '_styles';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
  label: string;
  onPress: () => void;
}

const Button = ({ label, onPress }: ButtonProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={[s.container, { backgroundColor: colors.background }]}
      onPress={onPress}>
      <Text style={[s.label, { color: colors.text }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const s = StyleSheet.create({
  container: {
    height: 61,
    borderRadius: 50,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: Typography.FONT_SIZE_20,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
  },
});
