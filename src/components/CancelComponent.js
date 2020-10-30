import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Modal,
  TouchableOpacity,
} from 'react-native';
import {StackActions, NavigationActions} from '@react-navigation/native';

import {RadioButton} from 'react-native-paper';

const CancelModal = ({navigation, cancelVisible, setCancelVisible}) => {
  const [value, setValue] = React.useState('');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={cancelVisible}
      style={{width: 500}}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={{flex: 1, fontSize: 24, fontWeight: '600'}}>
            Lý do hủy chuyến
          </Text>
          <View style={{flex: 5}}>
            <RadioButton.Group
              onValueChange={(value) => setValue(value)}
              value={value}>
              <RadioButton.Item
                label="Chưa muốn về"
                value="first"
                status="checked"
                style={{width: '90%'}}
              />
              <RadioButton.Item
                label="Có người đưa về"
                value="second"
                style={{width: '90%'}}
              />
              <RadioButton.Item
                label="Đợi quá lâu"
                value="third"
                style={{width: '90%'}}
              />
              <RadioButton.Item
                label="Lý do khác"
                value="four"
                style={{width: '90%'}}
              />
            </RadioButton.Group>
          </View>
          <View
            style={{flex: 0.5, flexDirection: 'row-reverse', width: '100%'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Text style={{color: 'green', fontSize: 20}}>OK</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={(cancelVisible) => {
                setCancelVisible(!cancelVisible);
              }}>
              <Text style={{color: 'green', fontSize: 20, marginRight: 20}}>
                Hủy
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default CancelModal;
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    flex: 0.35,
    width: 300,
    height: 350,
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
