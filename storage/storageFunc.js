import AsyncStorage from '@react-native-async-storage/async-storage';

export const setData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
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


export const checkIfItemExists = async (itemId) => {
  try {
    const existingItems = await getData('@items_key'); // Fetch the stored items
    const itemExists = existingItems.some(item => item.id === itemId); // Check if the item is in the array
    return itemExists
  } catch (error) {
    console.log(error);
  }
};


export const addItemToStorage = async (itemId) => {
  const newItem = { id: itemId };
  const existingItems = await getData('@items_key');
  const updatedItems = [...existingItems, newItem];
  await setData('@items_key', updatedItems);
};

export const removeItemFromStorage = async (itemId) => {
  const existingItems = await getData('@items_key');
  const updatedItems = existingItems.filter(item => item.id !== itemId);
  await setData('@items_key', updatedItems);
};

export const clearAllStorage = async () => {
  try {
    await AsyncStorage.clear();
    console.log('All data cleared from AsyncStorage');
  } catch (error) {
    console.error('Error clearing AsyncStorage', error);
  }
};




