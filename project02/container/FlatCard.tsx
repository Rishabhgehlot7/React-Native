import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.Heading}>Flat Cards</Text>
      <View style={styles.CardContainer}>
        <View style={[styles.Card, styles.CardRed]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.Card, styles.CardGreen]}>
          <Text style={styles.text}>Green</Text>
        </View>
        <View style={[styles.Card, styles.CardBlue]}>
          <Text style={styles.text}>Blue</Text>
        </View>
      </View>
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
  CardRed: {
    backgroundColor: 'red',
  },
  CardGreen: {
    backgroundColor: 'green',
  },
  CardBlue: {
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
