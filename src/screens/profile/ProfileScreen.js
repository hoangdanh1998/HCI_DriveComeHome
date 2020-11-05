import React from 'react';
import {Text, SafeAreaView, Image} from 'react-native';
import Header from '../../components/HeaderComponent';

class ProfileScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <Header title="Hồ sơ" />
        <Image
          style={{
            width: '100%',
            height: '90%',
            top: 20,
          }}
          source={{
            uri:
              '/Users/hoang-danhnguyen/Documents/learning/HCI_DriveComeHome/src/asset/profile.png',
          }}
        />
      </SafeAreaView>
    );
  }
}

export default ProfileScreen;
