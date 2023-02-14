import { View, Text } from "react-native";
import Styles from "./ListStyle";

const List = ({data}) => {
    return (
            data.map((dataPoint)=>(
            <View key={dataPoint} style={Styles.listItem}>
            <Text style={Styles.itemText}>{dataPoint}</Text>
            </View>
        ))
    )
}

export default List;