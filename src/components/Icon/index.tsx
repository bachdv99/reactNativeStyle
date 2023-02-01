import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"

import * as React from 'react';

interface IconProps {
    name: String,
    type: String,
    size?: Number
    style?: Object
}

const Icon = (props: IconProps) => {
    const { name, type, size, style } = props
    switch (type) {
        case 'feather':
            return <Feather name={name} style={style} size={size} />
        case 'mcicons':
            return <MaterialCommunityIcons name={name} style={style} size={size} />
        case 'fontawesome5':
            return <FontAwesome5 name={name} size={size} style={style} />
        case 'entypo':
            return <Entypo name={name} size={size} style={style} />
        case 'ionicons':
            return <Ionicons name={name} size={size} style={style} />
        default:
            break;
    }
    return;
};
export default Icon