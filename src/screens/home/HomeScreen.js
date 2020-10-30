import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import Header from '../../components/HeaderComponent';
class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.screenContainer}>
        <Header title="Trang chủ" />
        <View style={styles.container}>
          <View style={styles.userInformation}>
            <Image
              style={styles.avatar}
              source={{
                uri:
                  '/Users/nguyenhoangdanh/Documents/Learning/ReactNative/DriveComeHome/src/asset/logo.png',
              }}
            />
            {/* <Text style={{fontSize: 26, paddingVertical: 15}}>
              Nguyễn Việt Hà
            </Text> */}
            {/* <Text>______________________________________________</Text> */}
          </View>
          <View style={styles.action}>
            <TouchableOpacity
              style={styles.btnEmergency}
              onPress={() => {
                this.props.navigation.navigate('Emergency');
              }}>
              <Text style={{color: 'white', fontSize: 30, fontWeight: '500'}}>
                Đặt khẩn cấp
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('HelpBooking');
              }}>
              <Text style={{fontSize: 30}}>Đặt hộ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    flex: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInformation: {
    marginVertical: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 200,
    height: 200,
    marginVertical: 20,
    borderRadius: 200 / 2,
  },
  action: {
    flex: 3,
    alignItems: 'center',
  },
  btnEmergency: {
    marginVertical: 50,
    backgroundColor: 'red',
    height: 120,
    width: 270,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
