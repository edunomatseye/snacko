import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.one}><Text>Open up App.js to start working on your app!</Text></View>
      <View style={styles.two}><Text>Fast refresh is really fast</Text></View>
      <View style={styles.three}><Text>Fast refresh</Text></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  one: {
    flex: 1,
    backgroundColor: 'red'
  },
  two: {
    flex: 2,
    backgroundColor: 'yellow'
  },
  three: {
    flex: 2,
    backgroundColor: 'green'
  }
});
