import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Value stored successfully:', value);
  } catch (error) {
    console.log('Error storing value:', error);
  }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('Retrieved value:', value);
      return value;
    } else {
      console.log('No value found for key:', key);
      return null;
    }
  } catch (error) {
    console.log('Error retrieving value:', error);
    return null;
  }
};