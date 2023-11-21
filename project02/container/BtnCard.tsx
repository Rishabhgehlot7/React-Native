import {
  Image,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function BtnCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.Heading}>Button Card</Text>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>It is my Mobile App</Text>
        </View>
        <View style={styles.ImageContainer}>
          <Image
            style={styles.FancyImage}
            source={{
              uri: 'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
          <View style={styles.BtnContainer}>
            <TouchableOpacity onPress={() => openWebsite('https://rishabhgehlot7.github.io/K-Mean-Getting-the-Optimal-Number-of-Clusters/')}>
              <Text style={styles.Btn}>Machine Learning Lab</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openWebsite('https://github.com/Rishabhgehlot7')}>
              <Text style={styles.Btn}>GitHub</Text>
            </TouchableOpacity>
          </View>
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
  header: {
    backgroundColor: '#0A79DF',
    flex: 1,
    alignItems: 'center',
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    height: 'auto',
    margin: 8,
    // borderColor: 'black',
    // borderWidth: 1,
    // padding: 4,
    borderRadius: 10,
    backgroundColor: '#0A79DF',
  },
  ImageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  FancyImage: {
    width: '100%',
    height: 180,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
  },
  TextArea: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 2,
    color: 'white',
  },
  form: {
    fontSize: 16,
    paddingVertical: 1,
    color: 'white',
  },
  description: {
    fontSize: 14,
    paddingVertical: 1,
    color: 'white',
  },
  footer: {
    fontSize: 14,
    paddingVertical: 1,
    color: 'white',
  },
  BtnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  Btn: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    color: '#0A79DF',
    width:160,
    textAlign:"center"
  },
});
