import React from 'react';
import {Text, SafeAreaView, Image} from 'react-native';
import Header from '../../components/HeaderComponent';

class HisKhanCapScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            top: 20,
          }}
          source={{
            uri:
              '/Users/nguyenhoangdanh/Documents/Learning/ReactNative/DriveComeHome/src/asset/HisKhancapScreen.png',
          }}
        />
      </SafeAreaView>
    );
  }
}

export default HisKhanCapScreen;
