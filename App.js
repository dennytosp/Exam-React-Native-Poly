import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Insert from './screens/InsertScreens';
import Home from './screens/HomeScreens';
import Update from './screens/UpdateScreens';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // headerMode="none"
      initialRouteName="Insert">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Insert" component={Insert} />
        <Stack.Screen name="Update" component={Update} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
