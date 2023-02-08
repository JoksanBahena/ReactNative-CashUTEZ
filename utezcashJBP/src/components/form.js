import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import colors from "../utils/colors";
import RNPickerSelect from "react-native-picker-select";

export default function Form(props) {
  //console.log(props);
  const { setCantidad, setInteres, setPlazos } = props;
  return (
    <View style={stylito.viewForm}>
      <View style={stylito.viewInputs}>
        <TextInput
          placeholder="Cantidad a pedir"
          keyboardType="numeric"
          style={stylito.inputs}
          onChange={(e) => setCantidad(e.nativeEvent.text)}
        />
        <TextInput
          placeholder="Interes %"
          keyboardType="numeric"
          style={[stylito.inputs, { width: "40%", marginLeft: 5 }]}
          onChange={(e) => setInteres(e.nativeEvent.text)}
        />
      </View>
      <RNPickerSelect
        style={selectStyle}
        placeholder={{
          label: "Selecciona los meses...",
          value: null,
        }}
        useNativeAndroidPickerStyle={false}
        onValueChange={(value) => setPlazos(value)}
        items={[
          { label: "3 Meses", value: "3" },
          { label: "6 Meses", value: "6" },
          { label: "12 Meses", value: "12" },
          { label: "24 Meses", value: "24" },
        ]}
      />
    </View>
  );
}

const stylito = StyleSheet.create({
  viewForm: {
    bottom: 0,
    width: "85%",
    paddingHorizontal: 40,
    backgroundColor: colors.C_PRIMARIO_OBSCURO,
    borderRadius: 30,
    height: 200,
    justifyContent: "center",
    marginTop: 15,
    position: "absolute",
  },
  viewInputs: {
    flexDirection: "row",
  },
  inputs: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    width: "60%",
    marginLeft: -5,
    marginRight: 4,
    color: "black",
    padding: 5,
    height: 50,
  },
});

const selectStyle = StyleSheet.create({
  inputAndroid: {
    backgroundColor: "white",
    marginTop: 10,
    fontSize: 16,
    padding: 10,
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 6,
    paddingRight: 25,
    color: "black",
  },
  inputIOS: {
    backgroundColor: "white",
    marginTop: 10,
    fontSize: 16,
    padding: 10,
    borderWidth: 0.5,
    borderColor: "black",
    borderRadius: 6,
    paddingRight: 25,
    color: "black",
  },
});
