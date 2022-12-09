import { FlatList, SafeAreaView, Text } from 'react-native';
import ColorBox from './components/ColorBox';

const colors = [
  'teal',
  'salmon',
  'orange',
  'red',
  'blue',
  'darkgreen',
  'lightgreen',
  'navy',
  'lime',
  'black',
  'brown',
  'grey',
  'darkgrey',
];
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ marginTop: 100 }}>These are some coloured boxes:</Text>
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <ColorBox color={item} />}
      />
    </SafeAreaView>
  );
};

export default App;
