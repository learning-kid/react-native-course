import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return <View>
  <Text style={styles.text}>lowsensi</Text>
  <Button 
    onPress={() => navigation.navigate('Components')}
    title="Got to Components Demo"
  />
  <Button
    title='Go to List Demo'
    onPress={() => navigation.navigate('List')}
  />
  {/* <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
    <Text>Go to List Demo</Text>
    <Text>Go to List Demo</Text>
    <Text>Go to List Demo</Text>
  </TouchableOpacity> */}
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
