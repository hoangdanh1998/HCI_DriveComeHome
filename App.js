import * as React from 'react';
import {StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import AppNavigation from './src/navigations/index';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />
      <StatusBar backgroundColor="blue" barStyle="dark-content" />
      <AppNavigation />
    </>
  );
};
const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: '#rgba(204,204,204,1)',
  },
});
export default App;
