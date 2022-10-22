import { View } from "react-native";

const RadioButton = ({ style, selected, handleRadio }) => {
  return (
    <View
      style={[
        {
          height: 24,
          width: 24,
          borderRadius: 12,
          borderWidth: 2,
          borderColor: "#000",
          alignItems: "center",
          justifyContent: "center",
          marginRight: 10,
        },
        style,
      ]}
    >
      {selected ? (
        <View
          style={{
            height: 12,
            width: 12,
            borderRadius: 6,
            backgroundColor: "#000",
          }}
        />
      ) : null}
    </View>
  );
};

export default RadioButton;
