import { Feather, Ionicons } from '@expo/vector-icons';
import { Colors, Typography } from '_styles';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface ExtendedSubjectProps {
  label: string;
  text: string;
  label_info: string;
  text_info: string;
}

const ExtendedSubject = ({
  label,
  label_info,
  text,
  text_info,
}: ExtendedSubjectProps) => {
  return (
    <View style={s.container}>
      <View style={s.top}>
        <Text style={{ fontSize: Typography.FONT_SIZE_24 }}>{label}</Text>
        <Text style={{ fontSize: Typography.FONT_SIZE_18, opacity: 0.5 }}>
          {text}
        </Text>
        <Text style={{ textAlign: 'right', marginRight: 35, fontSize: 16 }}>
          60
        </Text>
        <Feather
          name="user"
          size={20}
          color="black"
          style={{ position: 'absolute', bottom: 7, right: 10 }}
        />
      </View>
      <View>
        <Ionicons
          name="ios-rocket-outline"
          style={{ position: 'absolute', top: 10, left: 10 }}
          size={30}
          color="black"
        />
        <Text
          style={{
            fontSize: Typography.FONT_SIZE_22,
            textAlign: 'center',
            paddingTop: 15,
          }}>
          {label_info}
        </Text>
        <Text
          style={{
            fontSize: Typography.FONT_SIZE_16,
            textAlign: 'center',
            paddingBottom: 15,
            opacity: 0.5,
          }}>
          {text_info}
        </Text>
      </View>
    </View>
  );
};

export default ExtendedSubject;

const s = StyleSheet.create({
  container: {
    marginTop: 25,
    marginBottom: 5,
    borderRadius: 20,
    borderColor: Colors.BLUE,
    borderWidth: 2,
    backgroundColor: Colors.LIGHTBLUE,
  },
  top: {
    padding: 5,
    paddingLeft: 10,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 2,
    borderColor: Colors.BLUE,
  },
});
