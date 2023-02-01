import * as React from 'react';
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
import Icon from '../Icon';

const TextField = (props) => {
    const { placeholder, isPassword, textEntry, valid, onPressSecure, ...rest } = props
    return (
        <View style={{ marginTop: 6 }}>
            <TextInput
                style={[styles.inputText, { borderColor: valid ? Constants.SemanticError : Constants.default }]}
                placeholder={placeholder}
                secureTextEntry={textEntry}
                {...rest}
            />
            {
                isPassword &&
                <TouchableOpacity
                    style={{ position: 'absolute', right: 10, top: 12, }}
                    onPress={onPressSecure}
                >
                    <Icon type={'ionicons'} name={textEntry ? 'eye' : 'eye-off'} size={24} />
                </TouchableOpacity>
            }
        </View>
    )
};

export default TextField;

const styles = StyleSheet.create({
    inputText: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 8,
        fontSize: 16,
    },
})


