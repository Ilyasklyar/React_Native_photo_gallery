import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import PhotoScreen from './src/screens/PhotoScreen';
import thunk from 'redux-thunk';
import rootReducer from './src/redux/reducers/rootReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ title: 'Profile' }}
          />
          <Stack.Screen name="PhotoScreen" component={PhotoScreen} options={{ title: 'Photo' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
}