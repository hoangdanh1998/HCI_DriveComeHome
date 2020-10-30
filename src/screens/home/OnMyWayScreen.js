import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Modal, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import Header from '../../components/HeaderComponent';
import Icon from 'react-native-vector-icons/Ionicons';

class OnMyWayScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completeVisible: false,
    };
  }

  setCompleteVisible = (visible) => {
    this.setState({completeVisible: visible});
  };
  render() {
    const {completeVisible} = this.state;
    return (
      <SafeAreaView style={styles.screenContainer}>
        <Header title="Đang trên đường về..." />
        <View style={styles.container}>
          <TouchableOpacity
            style={{height: '100%', width: '100%'}}
            onPress={() => {
              this.setCompleteVisible(!completeVisible);
            }}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={{
                uri:
                  '/Users/nguyenhoangdanh/Documents/Learning/ReactNative/DriveComeHome/src/asset/onmyway.png',
              }}
            />
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={completeVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text
                style={{
                  flex: 1,
                  width: '100%',
                  textAlign: 'center',
                  fontSize: 21,
                  fontWeight: '500',
                }}>
                Chuyến đi đã hoàn thành
              </Text>
              <View
                style={{
                  flex: 5,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="checkmark" size={100} color="green" />
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row-reverse',
                  width: '100%',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Text style={{color: 'green', fontSize: 20}}>Đánh giá</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    this.setCompleteVisible(!completeVisible);
                    this.props.navigation.navigate('Home');
                  }}>
                  <Text style={{color: 'gray', fontSize: 20, marginRight: 20}}>
                    Đóng
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}
export default OnMyWayScreen;

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
  },
});
