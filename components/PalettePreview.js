import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const PalettePreview = ({ handlePress, colorPalette }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.text}>{colorPalette.paletteName}</Text>
      <FlatList
        data={colorPalette.colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <View
            style={{
              marginRight: 10,
              marginBottom: 15,
              marginTop: 5,
              backgroundColor: item.hexCode,
              width: 30,
              height: 30,
              borderColor: 'darkgrey',
              borderWidth: 1,
              borderRadius: 4,
            }}
          />
        )}
        horizontal={true}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default PalettePreview;
