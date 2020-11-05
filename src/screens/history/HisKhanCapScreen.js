import React from 'react';
import {Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Header from '../../components/HeaderComponent';

class HisKhanCapScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
              top: 20,
            }}
            source={{
              uri:
                '/Users/hoang-danhnguyen/Documents/learning/HCI_DriveComeHome/src/asset/HisKhancapScreen.png',
            }}
          />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default HisKhanCapScreen;
