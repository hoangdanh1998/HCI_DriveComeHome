import React from 'react';
import {
  TextInput,
  Text,
  Image,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import MyStatusBar from '../../components/MyStatusBar';
class ForgotPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.mainForm}>
          <Text
            style={{
              fontSize: 45,
              color: '#FF9E0C',
              fontWeight: '700',
              top: 40,
            }}>
            Quên mật khẩu
          </Text>
          {/* <Text style={{fontSize: 21, color: 'black', top: 20}}>
            Chào mừng bạn!
          </Text> */}
          <Text>Nhập số điện thoại bạn đã đăng ký</Text>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 0.3,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'pink-white',
                padding: 2,
              }}>
              <Image
                style={{
                  width: 30,
                  height: 20,
                }}
                source={{
                  uri:
                    '/Users/nguyenhoangdanh/Documents/Learning/ReactNative/DriveComeHome/src/asset/quocky.png',
                }}
              />
              <Text>+84</Text>
            </View>
            <TextInput
              style={{
                borderRadius: 5,
                marginLeft: 15,
                borderWidth: 0.3,
                width: 200,
                fontSize: 24,
                paddingLeft: 10,
              }}
              placeholder="0394-422-439"
            />
          </View>
        </View>
        <View style={styles.nullView}></View>
        <View style={styles.buttonNext}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Confirm');
            }}>
            <Text style={{fontSize: 24, fontWeight: '500'}}>Tiếp tục </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
export default ForgotPasswordScreen;
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginLeft: 20,
  },
  buttonNext: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainForm: {
    flex: 4,
    justifyContent: 'space-around',
  },
  nullView: {
    flex: 5,
  },
});
