import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Header = ({title}) => (
  <View style={styles.headerContainer}>
    {/*  */}
    <Text style={styles.headerText}>{title}</Text>
    {/*  */}
  </View>
);

export default Header;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    paddingVertical: 15,
    backgroundColor: '#FFC700',
    justifyContent: 'space-between',
    alignItems: "center"
  },
  headerText: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '500',
  },
});