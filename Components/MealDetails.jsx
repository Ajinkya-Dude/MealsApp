import { View, Text, } from "react-native";
import Styles from "./MealDetailsStyle";

function MealDetails(props) {
    return (
        <View style={[Styles.details, props.txtColor]}>
            <Text style={Styles.detailItem}>{props.duration}m</Text>
            <Text style={Styles.detailItem}>{props.complexity.toUpperCase()}</Text>
            <Text style={Styles.detailItem}>{props.affordability.toUpperCase()}</Text>
        </View>
    )
}
export default MealDetails;