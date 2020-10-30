import React, {Fragment} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Checkbox, RadioButton} from 'react-native-paper';
import Loader from '../../components/Loader';

import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {CheckBox} from 'react-native-elements';
import Header from '../../components/HeaderComponent';

class FillInformationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      value: '',
      isLoading: false,
    };
  }
  startLoader(query) {
    this.setState({
      isLoading: true,
    });
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
      this.props.navigation.replace('Emergency');
    }, 500);
  }

  setValue = (value) => {
    this.setState({value: value});
  };
  render() {
    const {value} = this.state;
    return (
      <Fragment>
        <Loader loading={this.state.isLoading} />
        <View style={{flex: 0, backgroundColor: 'red'}} />
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: 'white',
          }}>
          <Header title="Điền thông tin" />
          <ScrollView
            style={styles.ScrollView}
            contentContainerStyle={{
              justifyContent: 'space-evenly',
            }}>
            <View style={styles.PersonalInformation}>
              <Text style={styles.info}>Họ và tên khách hàng</Text>
              <TextInput style={styles.textInput} />
              <Text style={styles.info}>Giới tính</Text>
              <View>
                <RadioButton.Group
                  onValueChange={(value) => {
                    this.setValue(value);
                  }}
                  value={value}
                  style={{flex: 1, flexDirection: 'row'}}>
                  <RadioButton.Item
                    color="#FFC700"
                    label="Nam"
                    value="first"
                    status="checked"
                    style={{width: '30%'}}
                  />
                  <RadioButton.Item
                    label="Nữ"
                    color="#FFC700"
                    uncheckedColor="red"
                    value="second"
                    style={{width: '30%'}}
                  />
                </RadioButton.Group>
              </View>
              <Text style={styles.info}>Điểm đón khách *</Text>
              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  paddingVertical: 5,
                  fontSize: 24,
                  borderRadius: 5,
                  width: '85%',
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
              <Text style={styles.info}>Địa chỉ đưa về *</Text>
              <View
                style={{
                  flexDirection: 'row',
                  borderWidth: 1,
                  paddingVertical: 5,
                  fontSize: 24,
                  borderRadius: 5,
                  width: '85%',
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
            <Text style={styles.title}>
              Tình trạng say hiện tại của khách hàng
            </Text>
            <View style={{left: -15}}>
              <CheckBox
                title="Nôn ối"
                containerStyle={{backgroundColor: 'white', borderWidth: 0}}
                checkedColor="#FFC700"
                uncheckedColor="#FFC700"
                checked={false}
                alignItems="left"
              />
              <CheckBox
                title="Đi đứng không vững"
                containerStyle={{backgroundColor: 'white', borderWidth: 0}}
                checkedColor="#FFC700"
                uncheckedColor="#FFC700"
                checked={false}
                alignItems="left"
              />
              <CheckBox
                title="Nằm bê xê lếch"
                containerStyle={{backgroundColor: 'white', borderWidth: 0}}
                checkedColor="#FFC700"
                uncheckedColor="#FFC700"
                checked={false}
                alignItems="left"
              />
              <CheckBox
                title="Cần người kè đi"
                containerStyle={{backgroundColor: 'white', borderWidth: 0}}
                checkedColor="#FFC700"
                uncheckedColor="#FFC700"
                checked={false}
                alignItems="left"
              />
            </View>
            <Text style={styles.info}>Ghi chú</Text>
            <TextInput style={styles.textInputGhiChu} multiline={true} />
            <TouchableOpacity
              style={styles.btnConfirm}
              onPress={() => {
                this.startLoader('Kick off');
              }}>
              <Text style={{color: 'white', fontSize: 30, fontWeight: '500'}}>
                Xác nhận
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  ScrollView: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: '10%',
  },
  textInput: {
    borderWidth: 1,
    paddingVertical: 5,
    fontSize: 24,
    borderRadius: 5,
    width: '85%',
    marginVertical: 10,
  },
  textInputGhiChu: {
    borderWidth: 1,
    paddingVertical: 5,
    fontSize: 18,
    borderRadius: 5,
    width: '85%',
    marginVertical: 10,
    height: 100,
    justifyContent: 'flex-start',
  },
  addImage: {
    width: 100,
    height: 100,
  },
  title: {fontSize: 20, color: 'black', fontWeight: 'bold', marginVertical: 20},
  info: {
    fontSize: 20,
    color: 'black',
    fontWeight: '500',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  btnConfirm: {
    top: 20,
    height: 80,
    backgroundColor: 'red',
    width: '85%',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default FillInformationScreen;
