import { StyleSheet, SafeAreaView, StatusBar, Text, View } from 'react-native';

export default function App() {
  return (
    <View>
      <StatusBar barStyle = {'light-content'}/>
      <View>
        <Text style={{color:"red"}}>Cabeza</Text>
      </View>
      <View>
        <Text style={styles.resultados}>Resultados</Text>
      </View>
      <View>
        <Text>Bottom</Text>
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
});
