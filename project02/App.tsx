import {Text, StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import React, {Component} from 'react';
import FlatCard from './container/FlatCard';
import EvelatedCards from './container/EvelatedCards';
import FancyCard from './container/FancyCard';
import BtnCard from './container/BtnCard';
import ContactList from './container/ContactList';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.body}>
        <ScrollView>
          <FlatCard />
          <EvelatedCards/>
          <FancyCard/>
          <BtnCard/>
          <ContactList/>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    backgroundColor:"#74B9FF",
    width:"100%",
    height:"100%",
  }
});
