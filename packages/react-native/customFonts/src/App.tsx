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
    flex: 1,
  };

  const statusBarPadding = {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
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
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          },
          statusBarPadding,
          {justifyContent: 'center'},
        ]}>
        <View style={styles.container}>
          <Text style={styles.textRegular}>Raleway-Regular</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.textMedium}>Raleway-Medium</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.textBold}>Raleway-Bold</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRegular: {
    fontFamily: 'Raleway-Regular',
    fontSize: 30,
    color: '#F99',
  },
  textMedium: {
    fontFamily: 'Raleway-Medium',
    fontSize: 30,
  },
  textBold: {
    fontFamily: 'Raleway-Bold',
    fontSize: 30,
  },
});

export default App;
