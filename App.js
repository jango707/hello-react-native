import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[styles.container, { backgroundColor: 'teal' }]}>
        <Text style={{ color: 'white' }}>Hello there</Text>
      </View>
      <View style={styles.container}>
        <Text>Hello there</Text>
      </View>
      <View style={styles.container}>
        <Text>Hello there</Text>
      </View>
      <View style={styles.container}>
        <Text>Hello there</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '80%',
    marginHorizontal: '10%',
    marginVertical: '2%',
    padding: 10,
    backgroundColor: 'salmon',
  },
});

export default App;
