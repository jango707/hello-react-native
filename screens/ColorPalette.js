import { FlatList, View, Text } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FlatList
        data={route.params.colors}
        keyExtractor={(item) => item.hexCode}
        ListHeaderComponent={
          <Text>{route.params.paletteName} Color Palette:</Text>
        }
        renderItem={({ item }) => (
          <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
        )}
      />
    </View>
  );
};

export default ColorPalette;
