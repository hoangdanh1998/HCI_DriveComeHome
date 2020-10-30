import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Modal, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import Header from '../../components/HeaderComponent';
import Icon from 'react-native-vector-icons/Ionicons';

import CancelModal from '../../components/CancelComponent';
class ComingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cancelVisible: false,
      waitingVisible: false,
    };
  }
  setCancelVisible = (visible) => {
    this.setState({cancelVisible: visible});
  };
  setWaitingVisible = (visible) => {
    this.setState({waitingVisible: visible});
  };
  render() {
    const {cancelVisible, waitingVisible} = this.state;
    return (
      <SafeAreaView style={styles.screenContainer}>
        <Header title="Tài xế sắp đến ..." />
        <View style={styles.container}>
          <TouchableOpacity
            style={{height: '100%', width: '100%'}}
            onPress={() => {
              this.setWaitingVisible(!waitingVisible);
            }}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={{
                uri:
                  '/Users/nguyenhoangdanh/Documents/Learning/ReactNative/DriveComeHome/src/asset/coming.png',
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.action}>
          <View
            style={{
              height: '35%',
              width: '100%',
              backgroundColor: 'white',
              paddingHorizontal: 5,
              borderTopWidth: 0.5,
            }}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={{
                uri:
                  '/Users/nguyenhoangdanh/Documents/Learning/ReactNative/DriveComeHome/src/asset/infotaixe.png',
              }}
            />
          </View>
          <View
            style={{
              height: '33%',
              width: '100%',
              backgroundColor: 'white',
              paddingVertical: 15,
              flexDirection: 'row-reverse',
              paddingHorizontal: 20,
            }}>
            <Icon
              name="ios-call-outline"
              size={30}
              style={{marginHorizontal: 25}}
            />
            <TouchableOpacity>
              <Icon name="chatbubbles-outline" size={30} />
            </TouchableOpacity>
          </View>
          <View
            style={{height: '33%', width: '100%', backgroundColor: 'white'}}>
            <TouchableOpacity
              onPress={() => {
                this.setCancelVisible(!cancelVisible);
              }}>
              <Image
                style={{
                  width: '100%',
                  height: '110%',
                  top: 10,
                }}
                source={{
                  uri:
                    '/Users/nguyenhoangdanh/Documents/Learning/ReactNative/DriveComeHome/src/asset/Huy.png',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <CancelModal
          navigation={this.props.navigation}
          setCancelVisible={this.setCancelVisible}
          cancelVisible={this.state.cancelVisible}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={waitingVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                onPressOut={() => {
                  this.setWaitingVisible(!waitingVisible);
                  setTimeout(() => {
                    this.props.navigation.navigate('OnMyWay');
                  }, 500);
                }}
                style={{
                  width: '100%',
                  height: '100%',
                }}>
                <Image
                  style={{
                    width: '105%',
                    height: '80%',
                  }}
                  source={{
                    uri:
                      '/Users/nguyenhoangdanh/Documents/Learning/ReactNative/DriveComeHome/src/asset/came.png',
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

export default ComingScreen;
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 3,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  action: {
    flex: 1,
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
  },
  modalView: {
    flex: 0.35,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'baseline',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
