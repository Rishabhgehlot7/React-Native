import React from 'react';
import {Text, View, StyleSheet, useColorScheme} from 'react-native';

function AppPro(): JSX.Element {
  const ColorScheme = useColorScheme() === 'dark';
  return (
    <View style={Styles.container}>
      <Text style={ColorScheme ? Styles.DarkText : Styles.WhiteText}>
        Hello World
      </Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // fontSize: 100,
    backgroundColor: 'black',
  },
  WhiteText: {
    color: 'white',
  },
  DarkText: {
    color: 'black',
  },
});

export default AppPro;
