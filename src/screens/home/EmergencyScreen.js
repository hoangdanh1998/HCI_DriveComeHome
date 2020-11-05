import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Modal,
  TouchableHighlight,
} from 'react-native';
import Header from '../../components/HeaderComponent';

class EmergencyScreen extends React.Component {
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
      <SafeAreaView style={{flex: 1}}>
        <Header title="Đặt khẩn cấp" />
        <View style={styles.map}>
          <TouchableOpacity
            style={{height: '100%', width: '100%'}}
            onPress={() => {
              this.props.navigation.replace('Coming');
            }}>
            <Image
              style={{height: '110%', width: '100%'}}
              source={{
                uri:
                  '/Users/hoang-danhnguyen/Documents/learning/HCI_DriveComeHome/src/asset/map1.png',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.information}>
          <Text
            style={{
              fontSize: 25,
              borderWidth: 0.5,
              top: 44,
              backgroundColor: 'white',
              width: '100%',
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            {' '}
            Đang tìm tài xế ...
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.setModalVisible(!modalVisible);
            }}>
            <Image
              style={{
                top: 44,
                width: '100%',
                height: '75%',
                left: 1,
              }}
              source={{
                uri:
                  '/Users/hoang-danhnguyen/Documents/learning/HCI_DriveComeHome/src/asset/Info.png',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <Image
              style={{
                width: '100%',
                height: '50%',
                bottom: 20,
              }}
              source={{
                uri:
                  '/Users/hoang-danhnguyen/Documents/learning/HCI_DriveComeHome/src/asset/Huy.png',
              }}
            />
          </TouchableOpacity>
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
                <Image
                  style={{
                    width: 350,
                    height: 350,
                    borderRadius: 10,
                    bottom: 62,
                  }}
                  source={{
                    uri:
                      '/Users/hoang-danhnguyen/Documents/learning/HCI_DriveComeHome/src/asset/found.png',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    flex: 3,
    alignItems: 'center',
  },
  information: {
    flex: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    width: 350,
    height: 350,
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
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default EmergencyScreen;
