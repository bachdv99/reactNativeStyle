import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'; import HeaderText from '../../components/HeaderText';
import TextField from '../../components/TextField';
import Constants from '../../Constants';

interface ResignPasswordProps {
  onGoBack: Function;
  onForward: Function;
}

export function ResignPassword(props: ResignPasswordProps) {
  const { onGoBack, onForward } = props;
  const [resignPassword, setResignPassword] = useState('');
  const [resignPassword2, setResignPassword2] = useState('');
  const [textEntry, setTextEntry] = useState(true);
  const [textEntry2, setTextEntry2] = useState(true);

  const checkPassword = () => {
    if (resignPassword != resignPassword2) {

    }
  }
  return (
    <View style={styles.container}>
      <HeaderText text={'Tạo mật khẩu mới'} onGoBack={onGoBack} />
      <Text style={[styles.text, { marginTop: 200 }]}>Mật khẩu</Text>
      <View>
        <TextField
          onChangeText={(value) => {
            setResignPassword(value)
          }}
          valid={resignPassword.length < 6 ? true : false}
          placeholder="Nhập mật khẩu mới"
          secureTextEntry={textEntry}
          isPassword

          textEntry={textEntry}
          onPressSecure={() => {
            setTextEntry(!textEntry);
          }}
          value={resignPassword}
        />
      </View>
      {
        resignPassword.length < 6 && <Text style={styles.error}>Mật khẩu có ít nhất 6 ký tự</Text>
      }
      <Text style={[styles.text]}>Nhập lại mật khẩu</Text>
      <View>
        <TextField
          placeholder="Nhập mật khẩu"
          secureTextEntry={textEntry2}
          isPassword
          textEntry={textEntry2}
          onPressSecure={() => {
            setTextEntry2(!textEntry2);
          }}
          onChangeText={value => {
            setResignPassword2(value);
          }}
          value={resignPassword2}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onForward}>
        <Text style={[styles.text, { color: 'white', height: 50 }]}>
          Hoàn thành
        </Text>
      </TouchableOpacity>
    </View>
  );
}

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
    borderRadius: 5,
  },
  hiText: {
    width: 500,
    height: 36,
    fontWeight: 'bold',
    fontSize: 30,
    color: Constants.Neutral900,
  },

  button: {
    height: 44,
    marginTop: 24,
    borderRadius: 8,
    backgroundColor: '#3BB549',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    color: Constants.Neutral900,
  },
  forgotPasswordText: {
    fontSize: 14,
    marginTop: 10,
  },
  passwordField: {
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    marginTop: 30,
    marginLeft: 24,
    marginRight: 24
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputField: {
    borderBottomWidth: 1,
    borderColor: '#EFF1F4',
  },
  text4: {
    fontSize: 14,
    lineHeight: 18,
    color: '#677987',
  },
  textInfo: {
    fontSize: 16,
    lineHeight: 24,
    color: '#52606B',
  },
  space: {
    height: 10,
    backgroundColor: '#E5E5E5',
  },
  infoContainer: {
    marginTop: 10,
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 10,
  },
  error: {
    color: Constants.SemanticError,
    marginTop: 12
  }
});
