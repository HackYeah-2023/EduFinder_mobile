import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Typography } from '_styles';
import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

export interface Props {
  placeholder: string;
  onSearch: (e: string) => void;
  autoFocus?: boolean;
}

const SearchBar = ({ placeholder, onSearch, autoFocus }: Props) => {
  const { width } = useWindowDimensions();
  const { colors } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const textInput = useRef<TextInput>(null);

  const focusTextInput = () => {
    textInput.current?.focus();
  };

  const search = () => {
    onSearch(searchQuery);
  };

  return (
    <TouchableOpacity
      hitSlop={{ top: 20, bottom: 20, right: 5, left: 5 }}
      style={[
        s.searchBar,
        {
          width: width - 120,
          marginHorizontal: 23,
          borderColor: colors.border,
          backgroundColor: colors.background,
        },
      ]}
      onPress={focusTextInput}
      activeOpacity={0.7}>
      <TextInput
        numberOfLines={1}
        placeholder={placeholder}
        style={[s.searchPlaceholder, { color: colors.text }]}
        placeholderTextColor={colors.text}
        value={searchQuery}
        autoCapitalize="none"
        onSubmitEditing={search}
        onChangeText={text => setSearchQuery(text)}
        ref={textInput}
        returnKeyType={'search'}
        autoFocus={autoFocus !== undefined}
      />
      <TouchableOpacity style={{ marginRight: 5 }} onPress={search}>
        <FontAwesome name="search" size={25} color={colors.text} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default SearchBar;

const s = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    height: 50,
    borderRadius: 50,
    paddingHorizontal: 14,
    shadowOpacity: 0.02,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 3,
    elevation: 0,
    borderWidth: 2,
  },
  searchPlaceholder: {
    fontSize: Typography.FONT_SIZE_15,
    paddingRight: 10,
    flexDirection: 'row',
    textAlign: 'left',
    flexWrap: 'nowrap',
    flex: 1,
  },
});
