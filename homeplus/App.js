import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import firebase from 'firebase';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';
import AuthLoadingScreen from './AuthLoadingScreen';
import ProfileScreen from './ProfileScreen';



const Stack = createStackNavigator();

class App extends React.Component {
  UNSAFE_componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyCgSXHU6Pz1JL35D6zWKLnJkVRFou0115g',
      authDomain: 'madcamp2-f5aa4.firebaseapp.com',
      databaseURL: 'https://madcamp2-f5aa4-default-rtdb.firebaseio.com/',
      projectId: 'madcamp2-f5aa4',
      storageBucket: 'gs://madcamp2-f5aa4.appspot.com',
      messagingSenderId: '364591324231',
      appId: '1:364591324231:android:5913ac52d1391a7caea562',

    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AuthLoading">
          <Stack.Screen
            name="AuthLoading"
            component={AuthLoadingScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                          headerShown: false,
                        }}
          />
          <Stack.Screen
            name="Auth"
            component={LoginScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;