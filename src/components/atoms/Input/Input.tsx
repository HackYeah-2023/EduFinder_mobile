import { Feather } from '@expo/vector-icons';
import { Colors, Typography } from '_styles';
import React, { useCallback, useState } from 'react';
import {
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Animated, {
  FadeInRight,
  FadeInUp,
  FadeOutRight,
} from 'react-native-reanimated';

interface InputProps extends TextInputProps {
  label: string;
  value: string | undefined;
  onChangeText?: (e: string | React.ChangeEvent<any>) => void;
  onBlur?: (e: any) => void;
  error?: string;
  passwordInput?: boolean;
  style?: ViewStyle;
  placeholder?: string | undefined;
  multiline?: boolean;
  disabled?: boolean;
  theme?: string;
  questionMark?: string;
  calculator?: boolean;
  isGreen?: boolean;
}

const Input = React.forwardRef<TextInput, InputProps>(
  (
    {
      label,
      value,
      onChangeText,
      onBlur,
      error,
      passwordInput = false,
      style,
      placeholder,
      multiline,
      disabled = false,
      theme,
      questionMark,
      calculator = false,
      isGreen = false,
      ...rest
    },
    ref,
  ) => {
    // const { colors } = useTheme();
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordShown, setIsPasswordShown] = useState(!passwordInput);

    const handleBlur = useCallback(
      (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onBlur && onBlur(e);
        setIsFocused(false);
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [],
    );

    const activeColor = calculator ? Colors.GREEN : Colors.FULLBLACK;
    const nonActiveColor = calculator ? Colors.GREEN : Colors.FULLBLACK;
    const borderColor: ViewStyle = {
      borderColor: error
        ? Colors.FULLBLACK
        : isFocused
        ? activeColor
        : nonActiveColor,
    };

    return (
      <>
        <View
          style={[
            s.container,
            borderColor,

            {
              backgroundColor: isGreen ? Colors.GREEN : Colors.TRANSPARENT,
              height: multiline ? 250 : 52,
            },
          ]}>
          <View
            style={[
              s.wrapper,
              multiline
                ? { padding: 10 }
                : {
                    alignItems: 'center',
                  },
            ]}>
            <Text style={[s.label]}>{label}</Text>

            <TextInput
              ref={ref}
              style={[
                s.input,
                {
                  textAlign: calculator ? 'center' : 'left',
                },
              ]}
              value={value}
              placeholder={placeholder}
              secureTextEntry={!isPasswordShown}
              onChangeText={onChangeText}
              onBlur={handleBlur}
              onFocus={() => setIsFocused(true)}
              editable={!disabled}
              multiline={multiline}
              {...rest}
            />
            {passwordInput && (
              <Animated.View
                style={{ marginLeft: 15 }}
                entering={FadeInRight}
                exiting={FadeOutRight}>
                <TouchableOpacity
                  hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
                  style={s.eyeButton}
                  onPress={() => setIsPasswordShown(prev => !prev)}>
                  {isPasswordShown ? (
                    <Feather name="eye" size={24} color="black" />
                  ) : (
                    <Feather name="eye-off" size={24} color="black" />
                  )}
                </TouchableOpacity>
              </Animated.View>
            )}
          </View>
        </View>
        {error && (
          <Animated.Text
            entering={FadeInUp}
            style={[s.infoLabel, { color: Colors.RED, marginTop: 5 }]}>
            {error}
          </Animated.Text>
        )}
      </>
    );
  },
);

export default Input;

const s = StyleSheet.create({
  container: {
    borderWidth: 2,
    marginVertical: 5,
    flex: 1,
    borderRadius: 50,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 21,
  },
  label: {
    fontSize: Typography.FONT_SIZE_14,
  },
  input: {
    flex: 1,
    fontSize: Typography.FONT_SIZE_14,
  },
  eyeButton: {
    padding: 5,
  },
  infoLabel: {
    fontSize: Typography.FONT_SIZE_12,
    color: Colors.RED,
    textAlign: 'right',
  },
});
