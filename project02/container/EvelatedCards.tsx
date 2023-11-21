import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function EvelatedCards() {
  return (
    <View>
      <Text style={styles.Heading}>EvelatedCards</Text>
      <ScrollView horizontal={true} style={styles.CardContainer}>
        <View style={[styles.Card, styles.CardEvelater]}>
          <Text style={styles.text}>Hello</Text>
        </View>
        <View style={[styles.Card, styles.CardEvelater]}>
          <Text style={styles.text}>I</Text>
        </View>
        <View style={[styles.Card, styles.CardEvelater]}>
          <Text style={styles.text}>am</Text>
        </View>
        <View style={[styles.Card, styles.CardEvelater]}>
          <Text style={styles.text}>Rishabh</Text>
        </View>
        <View style={[styles.Card, styles.CardEvelater]}>
          <Text style={styles.text}>Gehlot</Text>
        </View>
        <View style={[styles.Card, styles.CardEvelater]}>
          <Text style={styles.text}>😁</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Heading: {
    fontSize: 24,
    paddingHorizontal: 8,
    fontWeight: 'bold',
  },
  CardContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  Card: {
    width: 100,
    height: 100,
    flex: 1,
    margin: 8,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardEvelater: {
    backgroundColor: '#0A79DF',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 4,
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowColor: 'red',
  },
  text: {
    color: 'white',
    fontSize:18
  },
});
