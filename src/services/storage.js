import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeLocalData = async (key, value) => {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem(key, jsonValue);
};

export const getLocalData = async (key) => {
  const value = await AsyncStorage.getItem(key);

  return JSON.parse(value);
};

export const removeLocalValue = async (key) => {
  await AsyncStorage.removeItem(key);
};
