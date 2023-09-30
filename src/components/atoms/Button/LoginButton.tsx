import { Colors, Typography } from '_styles';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

interface LoginButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
}

const LoginButton = ({ label, onPress, style }: LoginButtonProps) => {
  return (
    <TouchableOpacity
      style={[s.container, style]}
      onPress={onPress}
      activeOpacity={0.7}>
      <Text style={s.label}>{label}</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;

const s = StyleSheet.create({
  container: {
    height: 61,
    borderColor: Colors.FULLBLACK,
    borderWidth: 2,
    borderRadius: 50,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: Typography.FONT_SIZE_20,
    opacity: 0.7,
  },
});
