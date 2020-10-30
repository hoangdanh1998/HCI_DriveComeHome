import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {
  TextInput,
  Modal,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {Tooltip} from 'react-native-elements';
import Loader from '../../components/Loader';

class HelpBookingScreen extends React.Component {
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
      <SafeAreaView style={styles.screenContainer}>
        <Loader loading={this.state.isLoading} />
        <View style={styles.container}>
          <View>
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                bottom: 100,
                fontWeight: '500',
                left: 20,
                bottom: 50,
              }}>
              Nhập biển số xe khách hàng
            </Text>
            <Text
              style={{
                color: 'black',
                fontSize: 12,
                fontWeight: '500',
                left: 30,
                bottom: 50,
              }}></Text>
            {/* <Tooltip
              backgroundColor="white"
              style={{width: 'auto'}}
              popover={
                <Text>
                  Dùng để tìm thông tin khách hàng đã đăng ký với ứng dụng
                </Text>
              }>
              <Ionicon
                name="md-information-circle-outline"
                size={24}
                style={{fontWeight: '500', left: 30, bottom: 50}}></Ionicon>
            </Tooltip> */}
          </View>
          <TextInput
            style={{
              width: '90%',
              height: 50,
              fontSize: 24,
              borderWidth: 0.5,
              borderRadius: 10,
              paddingHorizontal: 10,
              left: 20,
            }}
            placeholder="59F-023.54"
          />
        </View>
        <View style={styles.action}>
          <TouchableOpacity
            style={styles.btnConfirm}
            onPress={() => this.startLoader('Kick off')}>
            <Text style={{color: 'white', fontSize: 30, fontWeight: '500'}}>
              Xác nhận
            </Text>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          style={{width: 500}}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity>
                <View>
                  <Image
                    style={{
                      width: 300,
                      height: 200,
                      borderRadius: 10,
                      bottom: 62,
                    }}
                    source={{
                      uri:
                        '/Users/nguyenhoangdanh/Documents/Learning/ReactNative/DriveComeHome/src/asset/missingInformation.png',
                    }}
                  />
                </View>
                <View style={styles.action}>
                  <TouchableOpacity
                    style={styles.btnCancle}
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                    }}>
                    <Text
                      style={{color: 'white', fontSize: 20, fontWeight: '500'}}>
                      Hủy
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.btnInput}
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                      this.props.navigation.navigate('HelpFillInformation');
                    }}>
                    <Text
                      style={{color: 'white', fontSize: 18, fontWeight: '500'}}>
                      Điền thông tin
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}

export default HelpBookingScreen;
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  action: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 300,
    height: 300,
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
    backgroundColor: 'red',
    height: 100,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 140,
  },
  btnCancle: {
    backgroundColor: '#ADADAD',
    height: 50,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
    left: 10,
  },
  btnInput: {
    right: 10,
    backgroundColor: '#FF9E0C',
    height: 50,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
