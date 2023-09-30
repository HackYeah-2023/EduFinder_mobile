import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface WrapperProps {
  children: React.ReactElement[] | React.ReactElement;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <LinearGradient colors={['#FFFFFF', '#C5DDFF']} style={s.linearGradient}>
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
