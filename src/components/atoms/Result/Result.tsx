import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ResultProps {}

const Result = ({}: ResultProps) => {
  return (
    <View style={s.container}>
      <Text>Result</Text>
    </View>
  );
};

export default Result;

const s = StyleSheet.create({
  container: {},
});
