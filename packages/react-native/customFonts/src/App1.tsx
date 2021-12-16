/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const ColorStyle = {
    color: isDarkMode ? Colors.lighter : Colors.darker,
  };

  const statusBarPadding = {
    paddingTop: StatusBar.currentHeight,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      <View
        style={[
          {
            flex: 1,
            justifyContent: 'center',
          },
          {
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          },
          statusBarPadding,
        ]}>
        <View style={styles.sectionContainer}>
          <Text>dsfds</Text>
          <Text>dsfds</Text>
          <Text>dsfds</Text>
          <Text>dsfds</Text>
          <Text style={styles.sectionTitleRegular}>Raleway-Regular</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitleMedium}>Raleway-Medium</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitleBold}>Raleway-Bold</Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={[styles.sectionTitleBold, ColorStyle]}>
            Raleway-Bold
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitleRegular: {
    fontFamily: 'Raleway-Regular',
    fontSize: 30,
  },
  sectionTitleMedium: {
    fontFamily: 'Raleway-Medium',
    fontSize: 30,
  },
  sectionTitleBold: {
    fontFamily: 'Raleway-Bold',
    fontSize: 30,
  },
});

export default App;
