import React from "react";
import react, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import TextField from "../../components/TextField";
import Constants from "../../Constants";
const LoginScreen = (props) => {
  const { onForward } = props
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [textEntry, setTextEntry] = useState(true)
  return (
    <View style={{ marginLeft: 24, marginRight: 24 }}>
      <View style={{ marginTop: 120 }}>
        <Text style={styles.hiText}>vClinic chào bạn!</Text>
        <Text style={[styles.text, { color: Constants.Neutral600 }]}>Đăng nhập để sử dụng thêm chức năng</Text>
      </View>
      <Text style={[styles.text, { marginTop: 40 }]}>Tên truy cập</Text>
      <TextField placeholder={'Tên người dùng hoặc email'}
        onChangeText={value => {
          setUserName(value)
        }}
      />
      <Text style={[styles.text, { marginTop: 16 }]}>Mật khẩu</Text>
      <TextField placeholder={'Nhập mật khẩu'} isPassword textEntry={textEntry} onPressSecure={() => setTextEntry(!textEntry)} value={password} onChangeText={value => setPassword(value)} />
      <View>
        <TouchableOpacity style={styles.button}>
          <Text style={[styles.text, { color: 'white', fontWeight: 'bold', marginBottom: 10, }]}>Đăng nhập</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: 'center' }}
          onPress={onForward}
        >
          <Text style={[styles.forgotPasswordText]}>Quên mật khẩu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  box: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 5
  },
  hiText: {
    width: 500,
    height: 36,
    fontWeight: 'bold',
    fontSize: 30,
    color: Constants.Neutral900
  },
  inputText: {
    borderWidth: 1,
    borderRadius: 8,
  },
  button: {
    height: 44,
    justifyContent: 'center',
    marginTop: 24,
    borderRadius: 8,
    backgroundColor: '#3BB549',
    alignItems: 'center'
  },
  text: {
    fontSize: 16,
    marginTop: 10,
    color: Constants.Neutral900
  },
  forgotPasswordText: {
    fontSize: 14,
    marginTop: 20,
    color: Constants.Primary500,
    fontWeight: 'bold'
  }
});
