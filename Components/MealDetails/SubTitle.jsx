import { View, Text } from "react-native";
import Styles from "./subTitleStyle";

function SubTitle({children}){
    //console.log(children);
    return(
        <View style={Styles.subTitleContainer}>
        <Text style={Styles.subTitle}>{children}</Text>
        </View>
    )
}

export default SubTitle;