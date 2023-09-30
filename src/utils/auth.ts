import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Token {
  token: string;
}

export const getToken = async (): Promise<Token | null> => {
  const data = await AsyncStorage.getItem('jwtToken');
  if (!data) {
    return null;
  }
  const token = JSON.parse(data);
  return token;
};

export const setToken = (token: Token) => {
  AsyncStorage.setItem('jwtToken', JSON.stringify(token));
};
