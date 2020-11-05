import React from 'react';
import {
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from '../../components/HeaderComponent';

class MapChosenScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
        <Image
          style={{
            width: '100%',
            height: '90%',
            flex: 8,
          }}
          source={{
            uri:
              '/Users/hoang-danhnguyen/Documents/learning/HCI_DriveComeHome/src/asset/mappicker.png',
          }}
        />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontWeight: '500', fontSize: 19, padding: 10}}>
            497/7 Phan Văn Trị, Phường 5, Gò Vấp, Hồ ...
          </Text>
          <TextInput
            placeholder=" + Thêm ghi chú địa chỉ"
            placeholderTextColor="#FFC700"
            style={{
              color: '#FFC700',
              width: '100%',
              fontSize: 19,
              paddingLeft: 10,
            }}
          />
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            style={styles.btnConfirm}
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Text style={{color: 'white', fontSize: 30, fontWeight: '500'}}>
              Xác nhận
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  btnConfirm: {
    height: 80,
    top: 32,
    backgroundColor: '#FF9E0C',
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MapChosenScreen;
