import { useTheme } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet } from 'react-native';

interface WrapperProps {
  children: React.ReactElement[] | React.ReactElement;
}

const Wrapper = ({ children }: WrapperProps) => {
  const { colors } = useTheme();
  return (
    <LinearGradient
      colors={[colors.background, colors.primary]}
      start={[0.5, 0.4]}
      style={s.linearGradient}>
      {children}
    </LinearGradient>
  );
};

export default Wrapper;

const s = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
