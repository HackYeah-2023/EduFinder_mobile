import { Colors } from '_styles';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet } from 'react-native';

interface WrapperProps {
  children: React.ReactElement[] | React.ReactElement;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <LinearGradient
      colors={[Colors.FULLWHITE, Colors.LIGHTBLUE]}
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
