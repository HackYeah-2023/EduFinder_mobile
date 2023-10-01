import { Typography } from '_styles';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface TextViewProps {
  label: string;
}

const TextView = ({ label }: TextViewProps) => {
  return (
    <View style={s.container}>
      <Text style={s.text}>{label}</Text>
    </View>
  );
};

export default TextView;

const s = StyleSheet.create({
  container: {
    borderColor: Colors.FULLBLACK,
    borderWidth: 2,
    borderRadius: 30,
  },
  text: {
    opacity: 0.7,
    fontSize: Typography.FONT_SIZE_20,
    textAlign: 'center',
    padding: 10,
  },
});
