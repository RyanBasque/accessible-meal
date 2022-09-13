import { Alert } from "react-native";

const showConfirmDialog = (confirm, recuse, onConfirm, onRecuse) => {
    return Alert.alert(
        confirm, 
        recuse,
      [
        {
          text: "Sim",
          onPress: onConfirm,
        },
        {
          text: "Não",
          onPress: onRecuse,
        },
      ]
    );
};

export default showConfirmDialog;