import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Styles from "./IconButtonStyle";

function IconButton({onPress}){
    return(
    <Pressable onPress={onPress} style={({pressed})=>pressed ? Styles.pressed : Styles.margin}>
        <Icon name='star' color="white" size={24} />
    </Pressable>)
}

export default IconButton;