import React from 'react';
import {Text, SafeAreaView, Image} from 'react-native';
import Header from '../../components/HeaderComponent';

class ChattingScreen extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Header title="Thông báo" />
        <Image
          style={{
            width: '100%',
            height: '90%',
          }}
          source={{
            uri:
              '/Users/nguyenhoangdanh/Documents/Learning/ReactNative/DriveComeHome/src/asset/notification.png',
          }}
        />
      </SafeAreaView>
    );
  }
}

export default ChattingScreen;
