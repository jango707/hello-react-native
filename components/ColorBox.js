import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ color }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text>Color: {color}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '80%',
    marginHorizontal: '10%',
    marginVertical: '2%',
    padding: 10,
  },
});

export default ColorBox;
