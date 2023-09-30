import { Colors, Typography } from '_styles';
import { PlatformEnum } from '_types';
import React, { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, TextStyle, View } from 'react-native';
import RNPickerSelect, { Item } from 'react-native-picker-select';

interface SelectProps {
  value: any;
  items: Item[];
  placeholder?: Item | object;
  error: string;
  onSubmit: (value: any) => void;
}

const Select = ({
  value,
  items,
  placeholder,
  error,
  onSubmit,
}: SelectProps) => {
  const [selectValue, setSelectValue] = useState<any>(null);
  const [active, setActive] = useState(false);

  const inputStyle: TextStyle = {
    color: Colors.FULLBLACK,
    paddingHorizontal: 10,
    fontSize: Typography.FONT_SIZE_14,
    alignSelf: 'stretch',
    textAlign: 'center',
  };

  useEffect(() => {
    setSelectValue(value);
  }, [value]);

  const handleSubmit = () => {
    onSubmit(selectValue);
  };

  return (
    <View>
      <View
        style={[
          s.container,
          { borderColor: active ? Colors.LIGHTBLUE : Colors.FULLBLACK },
        ]}>
        <View style={s.selectContainer}>
          <RNPickerSelect
            onValueChange={value => {
              onSubmit(value);
              if (Platform.OS === PlatformEnum.ANDROID) {
                setActive(false);
              }
            }}
            items={items}
            value={selectValue}
            placeholder={placeholder || {}}
            onDonePress={handleSubmit}
            onOpen={() => {
              setActive(true);
            }}
            onClose={() => {
              setActive(false);
              handleSubmit();
            }}
            style={{
              inputIOS: inputStyle,
              inputAndroid: inputStyle,
              placeholder: {
                color: Colors.FULLBLACK,
              },
            }}
            useNativeAndroidPickerStyle={false}
          />
        </View>
      </View>
      {error && <Text style={s.error}>{error}</Text>}
    </View>
  );
};

export default Select;

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    borderRadius: 50,
    paddingHorizontal: 21,
    borderWidth: 2,
    marginVertical: 5,
    backgroundColor: Colors.TRANSPARENT,
  },
  label: {
    fontSize: Typography.FONT_SIZE_14,
  },
  selectContainer: {
    flex: 1,
  },
  error: {
    color: Colors.RED,
    textAlign: 'right',
    fontSize: Typography.FONT_SIZE_11,
    marginTop: 3,
  },
});
