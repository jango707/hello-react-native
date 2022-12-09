import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ColorPalette from './screens/ColorPalette';
import Home from './screens/Home';

const App = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Color Palette"
          options={({ route }) => ({ title: route.params.paletteName })}
          component={ColorPalette}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
