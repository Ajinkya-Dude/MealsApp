import { Image, Text, View, ScrollView, Button } from "react-native";
import MealDetails from "../Components/MealDetails";
import List from "../Components/MealDetails/List";
import SubTitle from "../Components/MealDetails/SubTitle";
import { MEALS } from "../data/dummy-data";
import Styles from "./MealDetailScreenStyle";
import {useNavigation} from "@react-navigation/native"
import { useContext, useLayoutEffect } from "react";
import IconButton from "../Components/IconButton";
import { FavoritesContext } from "../Store/context/favorites-context";

// import SubTitle from "../Components/MealDetails/SubTitle"


function MealDetailScreen({ route }) {

    const mealId = route.params.mealId;

    const selecedMeal = MEALS.find((meal) => meal.id === mealId)

    const favoriteMealsCtx = useContext(FavoritesContext);

    const mealIsFavorite=favoriteMealsCtx.ids.includes(mealId)

    const navigation=useNavigation();

    const changeFavoriteStatusHandler=()=>{
        //console.log("pressed!")
        if(mealIsFavorite)
        {
            favoriteMealsCtx.removeFavorite(mealId);
        }
        else{
            favoriteMealsCtx.addFavorite(mealId);
        }
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: ()=>{
                return <IconButton 
                icon={mealIsFavorite ? "star" : "star-outline"} 
                color="white" 
                onPress={changeFavoriteStatusHandler} />
            }
        });
    },[navigation,changeFavoriteStatusHandler]);

    return (
        <ScrollView style={Styles.rootcontainer}>
            <Image style={Styles.image} source={{ uri: selecedMeal.imageUrl }} />
            <Text style={Styles.title}>{selecedMeal.title}</Text>
            <MealDetails duration={selecedMeal.duration} complexity={selecedMeal.complexity} affordability={selecedMeal.affordability} txtColor={Styles.detailText} />
            <View style={Styles.listOuterContainer}>
                <View style={Styles.listContainer}>
                    <SubTitle>Integration</SubTitle>
                    <List data={selecedMeal.ingredients} />
                    <SubTitle>Step</SubTitle>
                    <List data={selecedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailScreen;