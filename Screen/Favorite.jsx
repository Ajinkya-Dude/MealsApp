import { useContext } from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { FavoritesContext } from "../Store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealsList from "../Components/MealsList/MealsList";
import Styles from "./FavoriteStyle";

function Favorite({navigation}){
    navigation.setOptions({
        drawerIcon: ({color,size})=> <Icon name="star" color={color} size={size} />
    })

    const favoriteMealsCtx = useContext(FavoritesContext);

    const favoriteMeals= MEALS.filter((meal)=> { return favoriteMealsCtx.ids.includes(meal.id)});

    if(favoriteMeals.length === 0){
        return (
            <View style={Styles.rootContainer}>
                <Text style={Styles.text}>You Have No Favorite Meals Yet</Text>
            </View>
        )
    }

    return(
        <MealsList items={favoriteMeals} />
    )
}

export default Favorite;