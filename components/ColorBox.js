import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  return (
    <View style={[styles.container, { backgroundColor: hexCode }]}>
      <Text>
        {colorName}: {hexCode}
      </Text>
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
