import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.Heading}>FancyCard</Text>
      <View style={styles.container}>
        <View style={styles.ImageContainer}>
          <Image
            style={styles.FancyImage}
            source={{
                uri:"https://images.pexels.com/photos/784879/pexels-photo-784879.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }}
          />
        </View>
        <View style={styles.TextArea}>
          <Text style={styles.label}>Hawa Mahal</Text>
          <Text style={styles.form}>Jaipur, Rajasthan</Text>
          <Text style={styles.description}>
            The Hawa Mahal is a palace in the city of Jaipur, India. Built from
            red and pink sandstone, it is on the edge of the City Palace,
            Jaipur, and extends to the Zenana, or women's chambers.
          </Text>
          <Text style={styles.footer}>Welcome, Rajasthan</Text>
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
  container: {
    height: 'auto',
    margin: 8,
    // borderColor: 'black',
    // borderWidth: 1,
    // padding: 4,
    borderRadius: 10,
    backgroundColor:"white"
  },
  ImageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  FancyImage: {
    width: '100%',
    height: 180,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
  },
  TextArea: {
    paddingHorizontal:5,
    paddingVertical:5
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 2,
    color:"black"
  },
  form: {
    fontSize: 16,
    paddingVertical: 1,
    color:"black"
  },
  description: {
    fontSize: 14,
    paddingVertical: 1,
    color:"black"
  },
  footer: {
    fontSize: 14,
    paddingVertical: 1,
    color:"black"
  },
});
