import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

function ButtonPrimary({ isActive, text, isLoading, ...props }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: "#3154C5" }]}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#FFFF" />
      ) : (
        <Text style={{ color: "#FFFF" }}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

export default ButtonPrimary;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
