import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, SafeAreaView, TouchableOpacity, Image, Modal} from 'react-native';
import Header from '../../components/HeaderComponent';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  setModalVisible = (visible) => {
    this.setState({modalVisible: visible});
  };
  render() {
    const {modalVisible} = this.state;
    return (
      <SafeAreaView style={styles.screenContainer}>
        <Header title="Trang chủ" />
        <View style={styles.container}>
          <View style={styles.userInformation}>
            <Image
              style={styles.avatar}
              source={{
                uri:
                  '/Users/hoang-danhnguyen/Documents/learning/HCI_DriveComeHome/src/asset/logo.png',
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
                this.setModalVisible(!modalVisible);
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
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          style={{width: 500}}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPressOut={() => {
                  this.setModalVisible(!modalVisible);
                }}>
                <View style={{alignContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity
                    style={{
                      marginVertical: 10,
                      backgroundColor: 'white',
                      height: 100,
                      width: 250,
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderColor: 'red',
                      borderWidth: 1,
                    }}
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                      this.props.navigation.navigate('Emergency');
                    }}>
                    <Text
                      style={{color: 'black', fontSize: 24, fontWeight: '500'}}>
                      Về nhà
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      marginVertical: 20,
                      backgroundColor: 'white',
                      height: 100,
                      width: 250,
                      borderRadius: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderColor: 'blue',
                      borderWidth: 1,
                    }}
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                      this.props.navigation.navigate('Emergency');
                    }}>
                    <Text
                      style={{color: 'black', fontSize: 24, fontWeight: '500'}}>
                      Về cơ quan
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      marginVertical: 20,
                      backgroundColor: 'white',
                      height: 40,
                      width: 250,
                      borderRadius: 5,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderColor: 'black',
                      borderWidth: 0.5,
                    }}
                    onPress={() => {
                      this.setModalVisible(!modalVisible);
                      this.props.navigation.navigate('MapChosen');
                    }}>
                    <Text
                      style={{color: 'black', fontSize: 24, fontWeight: '500'}}>
                      Chọn địa chỉ mới
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

export default HomeScreen;
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  container: {
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInformation: {
    marginVertical: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 250,
    height: 250,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 380,
    height: 430,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 35,
    borderWidth: 1,
    borderColor: '#rgb(237, 147, 74)',
    alignItems: 'center',
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
