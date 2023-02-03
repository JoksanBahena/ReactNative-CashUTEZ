import { StyleSheet, SafeAreaView, StatusBar, Text, View } from 'react-native';
import colors from './src/utils/colors';
import Form from './src/components/form';

export default function App() {
  return (
    <View>
      <StatusBar barStyle = {'light-content'}/>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.titleApp}>💲 UTEZ CA$H 💸</Text>
        <Form></Form>
      </SafeAreaView>
      <View>
        <Text style={styles.resultados}>Resultados</Text>
      </View>
      <View>
        <Text style={[styles.resultados, styles.resultados2, {fontWeight:"bold"}]}>Bottom</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultados: {
    color:"blue"
  },
  resultados2: {
    fontSize: 30
  },
  safeArea: {
    backgroundColor: colors.C_PRIMARIO,
    height: 200,
    alignItems: 'center',
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  titleApp: {
    fontSize: 30,
    fontWeight: "bold", 
    color: "#fff",
    marginTop: 15 
  }
});
