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
<<<<<<< HEAD
      start={[0.5, 0.4]}
=======
>>>>>>> main
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