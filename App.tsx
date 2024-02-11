import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

const Section = () => {
  return <View style={styles.section} />;
};

const ScreenOne = () => {
  const isFocused = useIsFocused();

  // This is needed so the height of the longer tab doesn't affect the shorter tab
  // if removed both tabs will be the same height (the height of the bigger tab)
  // this does result in some unpleasant 'snapping' of the screen when switching from
  // longer tab to the shorter, bit it seems like a better alternative
  const position = isFocused ? 'relative' : 'absolute';

  return (
    <View style={[styles.screen, {position}]}>
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
      <Section />
    </View>
  );
};
const ScreenTwo = () => {
  const isFocused = useIsFocused();

  // This is needed so the height of the longer tab doesn't affect the shorter tab
  // if removed both tabs will be the same height (the height of the bigger tab)
  // this does result in some unpleasant 'snapping' of the screen when switching from
  // longer tab to the shorter, bit it seems like a better alternative
  const position = isFocused ? 'relative' : 'absolute';

  return (
    <View style={[styles.screen, {position}]}>
      <Section />
      <Section />
      <Section />
    </View>
  );
};

type NavigatorParamsList = {
  firstTab: undefined;
  secondTab: undefined;
};

const Tab = createMaterialTopTabNavigator<NavigatorParamsList>();

const Navigator = () => {
  return (
    <Tab.Navigator sceneContainerStyle={styles.scene}>
      <Tab.Screen
        name="firstTab"
        component={ScreenOne}
        options={{tabBarLabel: 'long screen'}}
      />
      <Tab.Screen
        name="secondTab"
        component={ScreenTwo}
        options={{tabBarLabel: 'short screen'}}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <NavigationContainer>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Navigator />
        </ScrollView>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {flex: 1},
  scene: {backgroundColor: 'white'},
  screen: {flex: 1, width: '100%', gap: 16, padding: 16},
  section: {
    width: '100%',
    height: 100,
    borderRadius: 16,
    backgroundColor: 'lavender',
    borderColor: 'cornflowerblue',
    borderWidth: 2,
  },
  scrollView: {
    flexGrow: 1,
  },
});

export default App;
