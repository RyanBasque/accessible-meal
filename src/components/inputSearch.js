import React from "react";
import { TextInput, StyleSheet } from "react-native";

const InputSearch = ({ textLabel, ...props }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={textLabel}
      placeholderTextColor="black"
      {...props}
    />
  );
};

export default InputSearch;

export const styles = StyleSheet.create({
  label: {
    position: "absolute",
  },
  input: {
    width: "100%",
    height: 40,
    marginVertical: 12,
    borderBottomWidth: 1,
    color: "black",
  },
});
