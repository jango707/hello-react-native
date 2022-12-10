import { useCallback, useEffect, useState } from 'react';
import { RefreshControl, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const fetchPalettes = useCallback(async () => {
    fetch('https://color-palette-api.kadikraman.vercel.app/palettes')
      .then(async (res) => setPalettes(await res.json()))
      .catch((e) => console.warn(e));
  }, []);

  useEffect(() => {
    fetchPalettes();
  }, [fetchPalettes]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchPalettes();
    setIsRefreshing(false);
  }, [fetchPalettes]);
  return (
    <FlatList
      style={{ padding: 10, backgroundColor: 'white' }}
      data={palettes}
      keyExtractor={(item) => item.paletteName}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      }
      renderItem={({ item }) => (
        <PalettePreview
          colorPalette={item}
          handlePress={() => {
            navigation.navigate('Color Palette', item);
          }}
        />
      )}
      ListHeaderComponent={
        <TouchableOpacity
          onPress={() => navigation.navigate('ColorPaletteModal')}
        >
          <Text>Show Modal</Text>
        </TouchableOpacity>
      }
    />
  );
};

export default Home;
