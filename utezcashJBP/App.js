import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Button,
} from "react-native";
import colors from "./src/utils/colors";
import Form from "./src/components/form";
import BtnCalculate from "./src/components/btnCalculate";

export default function App() {
  const [cantidad, setCantidad] = useState(null);
  const [interes, setInteres] = useState(null);
  const [plazos, setPlazos] = useState(null);

  const calcular = () => {
    console.log(`cant: ${cantidad}`);
    console.log(`int: ${interes}`);
    console.log(`plz: ${plazos}`);
  };
  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.comodin}></View>
        <Text style={styles.titleApp}>💲 UTEZ CA$H 💸</Text>
        <Form
          setCantidad={setCantidad}
          setInteres={setInteres}
          setPlazos={setPlazos}
        />
      </SafeAreaView>
      <View>
        <Text style={styles.resultados}>RES</Text>
      </View>
      <BtnCalculate></BtnCalculate>
    </View>
  );
}

const styles = StyleSheet.create({
  comodin: {
    height: 220,
    width: "100%",
    backgroundColor: colors.C_PRIMARIO,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1,
  },
  safeArea: {
    height: 290,
    alignItems: "center",
  },
  titleApp: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 15,
  },
});
