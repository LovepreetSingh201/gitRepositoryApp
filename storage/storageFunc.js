import AsyncStorage from '@react-native-async-storage/async-storage';

export const setData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log('====================================');
    console.log("dddddd");
    console.log('====================================');
  } catch (error) {
    console.error('Error', error);
  }
};

export const getData = async (key) => {
  try {
    const storedValue = await AsyncStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : [];
  } catch (error) {
    console.error('Error', error);
    return [];
  }
};
