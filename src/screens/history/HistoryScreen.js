import React from 'react';
import {View, SafeAreaView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Header from '../../components/HeaderComponent';

class HistoryScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <Header title="Lịch sử" />
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('HisCancel');
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
              }}
              source={{
                uri:
                  '/Users/nguyenhoangdanh/Documents/Learning/ReactNative/DriveComeHome/src/asset/HisCancel.png',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('HisHelp');
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
              }}
              source={{
                uri:
                  '/Users/nguyenhoangdanh/Documents/Learning/ReactNative/DriveComeHome/src/asset/HisHelp.png',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('HisKhanCap');
            }}>
            <Image
              style={{
                width: '100%',
                height: '100%',
              }}
              source={{
                uri:
                  '/Users/nguyenhoangdanh/Documents/Learning/ReactNative/DriveComeHome/src/asset/HisKhancap.png',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}></View>
        <View style={{flex: 1}}></View>
      </SafeAreaView>
    );
  }
}

export default HistoryScreen;
