import 'react-native-gesture-handler';
import * as React from 'react';
import {useContext} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchScreen from './SearchScreen';
import PathScreen from './PathScreen';
import BasketScreen from './BasketScreen';
import ProfileScreen from './ProfileScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {

    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        <Image
          source={
            require('./drawer.jpg')
          }
          style={{width: 25, height: 25, marginLeft: 10}}
        />
      </TouchableOpacity>
    </View>
  );
};

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  switch (routeName) {
    case 'SearchScreen':
      return '검색';
    case 'PathScreen':
      return '경로';
    case 'BasketScreen':
      return '장바구니';
    case 'TabStack':
      return '검색';
  }
};

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="SearchScreen"
      tabBarOptions={{
              activeTintColor: 'red',
              inactiveTintColor: 'gray',
              style: {
                backgroundColor: 'white',
              },
              labelStyle: {
                textAlign: 'center',
                fontSize: 16,
              },
            }}>
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({horizontal, tintColor}) => (
            <Ionicons
                name='search-outline'
                size={horizontal ? 20 : 25}
                //color={{tintColor}}
            />
          ),

        }}
      />

      <Tab.Screen
        name="PathScreen"
        component={PathScreen}
        options={{
            tabBarLabel: '경로탐색',
            tabBarIcon: ({horizontal, tintColor}) => (
               <Ionicons
                   name='navigate-outline'
                   size={horizontal ? 20 : 25}
                   //color={{tintColor}}
               />
            ),

        }}
      />

      <Tab.Screen
        name="BasketScreen"
        component={BasketScreen}
        options={{
            tabBarLabel: '장바구니',
            tabBarIcon: ({horizontal, tintColor}) => (
                <Ionicons
                    name='basket-outline'
                    size={horizontal ? 20 : 25}
                    //color={{tintColor}}
                />
            ),

        }}
      />
    </Tab.Navigator>
  );
};

const SearchScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="SearchScreen">
      <Stack.Screen
        name="검색"
        component={TabStack}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
          headerLeft: () => (
            <NavigationDrawerStructure
              navigationProps={navigation}
            />
          ),
          headerStyle: {
            backgroundColor: 'white', //Set Header color
          },
          headerTintColor: 'red', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        })}
      />
    </Stack.Navigator>
  );
};

const ProfileScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
          initialRouteName="ProfileScreen"
          screenOptions={{
            headerLeft: () => (
              <NavigationDrawerStructure navigationProps={navigation} />
            ),
            headerStyle: {
              backgroundColor: 'white', //Set Header color
            },
            headerTintColor: 'red', //Set Header text color
            headerTitleStyle: {
                          fontFamily: "serif",
              fontWeight: 'bold', //Set Header text style
            },
          }}>
          <Stack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
              title: '마이페이지',
            }}
          />
        </Stack.Navigator>
  );
};



const HomeScreen = () => {
  return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: 'red',
          itemStyle: {marginVertical: 5},
        }}>
        <Drawer.Screen
          name="SearchScreenStack"
          options={{drawerLabel: '홈'}}
          component={SearchScreenStack}
        />

        <Drawer.Screen
           name="ProfileScreenStack"
           options={{drawerLabel: '내 정보'}}
           component={ProfileScreenStack}
        />

      </Drawer.Navigator>
  );
};

export default HomeScreen;
