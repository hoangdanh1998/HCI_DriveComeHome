import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  View,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      password: '',
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.LabelLogin}>
          <Text style={{fontSize: 45, color: '#FF9E0C', fontWeight: '600'}}>
            Đăng Nhập
          </Text>
        </View>
        <View style={styles.inputTextLogin}>
          <View
            style={{
              flex: 2,
              width: '80%',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                borderWidth: 0.5,
                height: 50,
                borderRadius: 8,
                flexDirection: 'row',
              }}>
              <Icon
                name="call-outline"
                size={30}
                style={{margin: 8, opacity: 0.6}}
              />
              <TextInput
                placeholder="Số điện thoại"
                style={{fontSize: 21, paddingLeft: 5, width: '80%'}}
                onChangeText={(text) => {
                  this.setState({phone: text});
                }}
              />
            </View>
            <View
              style={{
                borderWidth: 0.5,
                height: 50,
                borderRadius: 8,
                flexDirection: 'row',
              }}>
              <Icon
                name="lock-closed"
                size={30}
                style={{margin: 8, opacity: 0.6}}
              />
              <TextInput
                secureTextEntry={true}
                placeholder="Mật khẩu"
                style={{fontSize: 21, paddingLeft: 5, width: '80%'}}
                onChangeText={(text) => {
                  this.setState({password: text});
                }}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              flex: 1,
              width: '80%',
              justifyContent: 'space-between',
              flexDirection: 'row-reverse',
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Forgot')}>
              <Text style={{fontSize: 16}}>Quên mật khẩu </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={{fontSize: 16}}>Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.loginScreenButton}>
          <TouchableOpacity
            onPress={() => {
              const {phone, password} = this.state;
              if (password !== '' && phone !== '') {
                this.props.navigation.navigate('Home');
              } else {
                Alert.alert('Vui lòng điền thông tin đăng nhập');
              }
            }}
            style={{
              paddingHorizontal: 30,
              width: '80%',
              height: '80%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 30,
              backgroundColor: '#FFC700',
            }}>
            <Text style={{fontSize: 30, color: 'white', fontWeight: '500'}}>
              ĐĂNG NHẬP
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imgFooter}>
          <Image
            style={{
              width: '100%',
              height: '90%',
              top: -35,
            }}
            source={{
              uri:
                '/Users/hoang-danhnguyen/Documents/learning/HCI_DriveComeHome/src/asset/background.jpg',
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  LabelLogin: {
    flex: 2,
    alignItems: 'baseline',
    flexDirection: 'column-reverse',
    paddingLeft: 20,
    marginBottom: 20,
  },
  inputTextLogin: {
    flex: 2,
    alignItems: 'center',
  },
  loginScreenButton: {
    flex: 1,
    alignItems: 'center',
  },
  imgFooter: {
    flex: 3,
    flexDirection: 'column-reverse',
  },
});

export default LoginScreen;
