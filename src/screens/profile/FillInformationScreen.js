import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/HeaderComponent';
import Loader from '../../components/Loader';

class FillInformationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      isLoading: false,
    };
  }
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };

  startLoader(query) {
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
      this.setModalVisible(!this.state.modalVisible);
    }, 500);
  }
  render() {
    const {modalVisible} = this.state;
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <Loader loading={this.state.isLoading} />
        <Header title="Hoàn tất đăng ký" />
        <ScrollView
          style={styles.ScrollView}
          contentContainerStyle={{
            justifyContent: 'space-evenly',
          }}>
          <Text style={styles.title}>Thông tin cá nhân *</Text>
          <View style={styles.PersonalInformation}>
            <Text style={styles.info}>Họ và tên *</Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.info}>Địa chỉ đưa về *</Text>
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                paddingVertical: 5,
                fontSize: 24,
                borderRadius: 5,
                width: '90%',
                marginVertical: 10,
              }}>
              <TextInput
                style={{
                  fontSize: 24,
                  width: '90%',
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('MapChosen');
                }}>
                <Icon name="ios-map-outline" size={26} />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.title}>Thông tin phương tiện *</Text>
          <Text style={{color: 'red', bottom: 15, paddingLeft: 20}}>
            * Hiện tại hệ thống chỉ hỗ trợ xe ô tô
          </Text>
          <View style={styles.PersonalInformation}>
            <Text style={styles.info}>Biển số xe *</Text>
            <TextInput style={styles.textInput} />
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={styles.info}>Ảnh xe *</Text>
                <Image
                  style={styles.addImage}
                  source={{
                    uri:
                      '/Users/nguyenhoangdanh/Documents/Learning/ReactNative/DriveComeHome/src/asset/addImage.png',
                  }}
                />
              </View>
              <View>
                <Text style={styles.info}>Ảnh giấy tờ xe *</Text>
                <Image
                  style={styles.addImage}
                  source={{
                    uri:
                      '/Users/nguyenhoangdanh/Documents/Learning/ReactNative/DriveComeHome/src/asset/addImage.png',
                  }}
                />
              </View>
            </View>
          </View>

          <Text style={styles.title}>Thông tin người thân *</Text>
          <View style={styles.RelationalInformation}>
            <Text style={styles.info}>Họ và tên *</Text>
            <TextInput style={styles.textInput} />
            <Text style={styles.info}>Số điện thoại *</Text>
            <TextInput style={styles.textInput} />
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity
              style={styles.btnConfirm}
              onPress={() => {
                this.startLoader('Kick off');
              }}>
              <Text style={{color: 'white', fontSize: 30, fontWeight: '500'}}>
                Xác nhận
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          style={{width: 500}}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                  this.props.navigation.replace('Home');
                }}>
                <View>
                  <Image
                    style={{
                      width: 300,
                      height: 200,
                      borderRadius: 10,
                    }}
                    source={{
                      uri:
                        '/Users/nguyenhoangdanh/Documents/Learning/ReactNative/DriveComeHome/src/asset/successgregister.png',
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  ScrollView: {
    flex: 1,
    paddingLeft: '10%',
  },
  textInput: {
    borderWidth: 1,
    paddingVertical: 5,
    fontSize: 24,
    borderRadius: 5,
    width: '90%',
    marginVertical: 10,
  },
  addImage: {
    width: 100,
    height: 100,
  },
  title: {fontSize: 24, color: 'black', fontWeight: '600', marginVertical: 20},
  info: {fontSize: 20, color: 'black', fontWeight: '500', marginVertical: 10},

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 300,
    height: 250,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnConfirm: {
    top: 20,
    height: 80,
    backgroundColor: 'red',
    width: '90%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FillInformationScreen;
