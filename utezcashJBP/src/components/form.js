import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import colors from "../utils/colors";

export default function Form() {
  return (
    <View style={stylito.viewForm}>
      <View style={stylito.viewInputs}>
        <TextInput
          placeholder="Cantidad a pedir"
          keyboardType="numeric"
          style={stylito.inputs}
        />
        <TextInput
          placeholder="Interes %"
          keyboardType="numeric"
          style={[stylito.inputs, { width: "40%", marginLeft: 5 }]}
        />
      </View>
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
