import * as React from 'react';
import Constants from '../../Constants';
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
import Feather from 'react-native-vector-icons/Feather'
import Icon from '../Icon';

const HeaderText = (props) => {
  console.log("props",props)
  const { text, onGoBack } = props
  return (
    <View style={{ flexDirection: 'row', alignItems:'center' }}>
      <TouchableOpacity
        onPress={onGoBack}
      >
        <Icon type='feather' name='arrow-left' style={{ marginRight: 10,color: Constants.Neutral900 }} size={25} />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, color: Constants.Neutral900 }}>{text}</Text>
    </View>
  )
};

export default HeaderText