import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const listIcon = {
  menu1: 'home',
  menu2: 'account',
  menu3: 'android',
  menu4: 'apple-icloud',
  menu5: 'archive',
};

//screen
import Home from '../screens/home-main';

const styles = StyleSheet.create({
  containerIcon: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainMenu: {
    backgroundColor: 'red',
    borderRadius: 50,
    bottom: 30,
    zIndex: 99,
  },
});

const {Navigator, Screen} = createBottomTabNavigator();

function MyTabBar({state, descriptors, navigation}) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View
      style={{
        ...StyleSheet.absoluteFill,
        flexDirection: 'row',
        borderWidth: 1,
        position: 'relative',
        zIndex: 100,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <View
            style={[
              styles.containerIcon,
              label === 'menu3' && styles.mainMenu,
            ]}>
            <TouchableOpacity
              key={label}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1, alignItems: 'center'}}>
              <Icon name={listIcon[label]} size={25} />
              <Text style={{color: isFocused ? '#673ab7' : '#222'}}>
                {label}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

function NavStack() {
  return (
    <Navigator tabBar={props => <MyTabBar {...props} />}>
      <Screen name="menu1" component={Home} />
      <Screen name="menu2" component={Home} />
      <Screen name="menu3" component={Home} />
      <Screen name="menu4" component={Home} />
      <Screen name="menu5" component={Home} />
    </Navigator>
  );
}

export default NavStack;
