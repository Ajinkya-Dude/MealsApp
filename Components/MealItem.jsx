import { Text, View, Pressable, Image } from "react-native";
import Styles from "./MealItemStyle";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";
function MealItem(props){

    const navigation = useNavigation();
    function selectMealIteMHandler(){
        navigation.navigate('MealDetail',{
            mealId: props.id
        });
    }


    return(
        <View style={Styles.mealItem}>
            <Pressable android_ripple={{color: "#ccc"}}
            style={({ pressed }) => (pressed ? Styles.buttonPressed : null)}
            onPress={selectMealIteMHandler}
            >
                <View style={Styles.innerCotainer}>
                <View>
                    <Image source={{uri: props.imageUrl}} style={Styles.image} />
                    <Text style={Styles.title}>{props.title}</Text>
                </View>
                {/* <View style={Styles.details}>
                    <Text style={Styles.detailItem}>{props.duration}m</Text>
                    <Text style={Styles.detailItem}>{props.complexity.toUpperCase()}</Text>
                    <Text style={Styles.detailItem}>{props.affordability.toUpperCase()}</Text>
                </View> */}
                <MealDetails duration={props.duration} complexity={props.complexity} affordability={props.affordability} />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;