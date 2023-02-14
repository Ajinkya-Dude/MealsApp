import { Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function Favorite({navigation}){
    navigation.setOptions({
        drawerIcon: ({color,size})=> <Icon name="star" color={color} size={size} />
    })
    return(
        <Text></Text>
    )
}

export default Favorite;