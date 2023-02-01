import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
import React from 'react'
import Icon from '../Icon'
import Constants from '../../Constants'
const imgsrc = '../../../picture.png'
type Props = {
    value: String
    screenName: String,
    onGoBack: () => void,
    onChangeText: (value) => void,

}

const WelcomeHeader = (props: Props) => {
    let { screenName, onGoBack, onChangeText, value } = props
    return (
        <View>
            <ImageBackground source={require('../../../picture.png')} style={{ flexDirection: 'row', margin: 0, height: 80, alignItems: 'flex-end', paddingBottom: 8 }} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={onGoBack}>
                        <Icon
                            type={'feather'}
                            name="arrow-left"
                            size={20}
                            style={{ marginRight: 10, marginLeft: 10, color: 'white' }}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, color: '#FFFFFF' }}>{screenName}</Text>
                </View>
            </ImageBackground>
            <View style={{ paddingLeft: 16, paddingRight: 16, backgroundColor: 'white' }}>
                <View
                    style={styles.search}>
                    <Icon type={'feather'} name="search" style={{ marginLeft: 10 }} size={20} />
                    <TextInput
                        style={{ width: 300 }}
                        placeholder="Tìm kiếm theo tên, SĐT, CCCD"
                        onChangeText={value => onChangeText(value)}
                        value={value}
                    />
                    <TouchableOpacity>
                        <Icon name="line-scan" type={'mcicons'} size={20} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default WelcomeHeader

const styles = StyleSheet.create({
    icon: {
        color: Constants.Primary500
    },
    search: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#EFF1F4',
        flexDirection: 'row',
        height: 44,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',

    }
})