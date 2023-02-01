import * as React from 'react';
import {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Constants from '../../Constants';
import TextField from '../../components/TextField';
import HeaderText from '../../components/HeaderText';

interface ForgotPasswordProp {
  onGoBack: Function;
  onForward: Function;
}

export function ForgotPassword (props: ForgotPasswordProp) {
  // console.log('props', props);
  const [email, setEmail] = useState('');
  let {onGoBack, onForward} = props;
  return (
      <View style={styles.container}>
        <HeaderText text={'Quên mật khẩu'} onGoBack={onGoBack} />
        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 16, lineHeight: 24, color: Constants.Neutral600}}>
            Liên kết đặt lại mật khẩu sẽ được gửi đến email của bạn để đặt lại
            mật khẩu của bạn. Nếu bạn không nhận được email trong vòng vài phút,
            vui lòng thử lại.
          </Text>
        </View>
        <View style={{marginTop: 80}}>
          <Text style={styles.text}>Email</Text>
          <TextField
            value={email}
            onChangeText={value => setEmail(value)}
            placeholder={'Nhập email'}
          />
          <TouchableOpacity style={styles.button} onPress={onForward}>
            <Text style={[styles.text, {color: 'white', height: 50}]}>
              Gửi đi
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};


const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    color: Constants.Neutral900,
  },
  container: {
    flex: 1,
    marginTop: 30,
    marginLeft: 24,
    marginRight: 24
  },
  button: {
    height: 44,
    marginTop: 24,
    borderRadius: 8,
    backgroundColor: '#3BB549',
    alignItems: 'center',
  },
});
