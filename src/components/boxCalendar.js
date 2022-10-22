import { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import DatePicker from "react-native-datepicker";

import ButtonPrimary from "./buttonPrimary";
import ModalQrCode from "./modalQrCode";

function BoxCalendar({ navigation }) {
  const [date, setDate] = useState("01-01-2022");
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={[styles.card]}>
      <View style={{ paddingHorizontal: 21 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
            color: "#292929",
            marginVertical: 20,
          }}
        >
          Marcar presença
        </Text>
        <View>
          <DatePicker
            date={date}
            mode="date"
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="01-01-2016"
            maxDate="01-01-2022"
            confirmBtnText="Confirmar"
            cancelBtnText="Cancelar"
            customStyles={{
              dateIcon: {
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
                borderWidth: 0,
              },
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
          />
        </View>
        <View style={{ marginTop: 10, height: 300 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "500",
              color: "#292929",
              marginVertical: 20,
            }}
          >
            Comentários
          </Text>
          <View
            style={{
              height: 94,
              width: "100%",
              backgroundColor: "#B9B9B9",
              padding: 10,
              borderRadius: 10,
              marginBottom: 20,
            }}
          >
            <TextInput multiline numberOfLines={5} value={""} />
          </View>
          <ButtonPrimary
            text="GERAR QR CODE"
            onPress={() => setShowModal(true)}
          />
          <ModalQrCode
            showModal={showModal}
            onPress={() => setShowModal(false)}
          />
        </View>
      </View>
    </View>
  );
}

export default BoxCalendar;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    width: "100%",
  },
});
