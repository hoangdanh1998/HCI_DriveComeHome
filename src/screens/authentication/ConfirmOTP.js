import React from 'react';
import {Text, View, SafeAreaView, StyleSheet} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
class ConfirmOTPScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SafeAreaView style={styles.screenContainer}>
        <View style={styles.mainForm}>
          <Text style={{fontSize: 20, top: 30, fontWeight: '500'}}>
            Nhập mã gồm 6 chữ số đã gửi tới{' '}
          </Text>
          <Text style={{fontSize: 18, bottom: 20}}>+84 0394422439</Text>
          <TextInput
            style={{
              padding: 5,
              borderWidth: 0.3,
              borderRadius: 3,
              fontSize: 24,
              width: 120,
              bottom: 30,
            }}
          />
        </View>
        <View style={styles.nullView}></View>
        <View style={styles.buttonNext}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.replace('FillInformation');
            }}>
            <Text style={{fontSize: 24, fontWeight: '500'}}>Xác nhận</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
export default ConfirmOTPScreen;
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
    flex: 3,
    justifyContent: 'space-around',
  },
  nullView: {
    flex: 6,
  },
});
