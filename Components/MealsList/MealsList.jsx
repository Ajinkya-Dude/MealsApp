import { View, FlatList } from "react-native";
import Styles from "../../Screen/MealsOverviewScreenStyle";
import MealItem from "../MealItem";


function MealsList({items}){
    function renderMealItem(itemData){
        const item=itemData.item;
        const mealItemProps={
            id: item.id,
            title:item.title,
            imageUrl: item.imageUrl,
            affordability: item.affordability,
            complexity: item.complexity,
            duration: item.duration

        }
        return <MealItem {...mealItemProps} />
    }

    return(
        <View style={Styles.container}>
            {/* <Text>Meals Overview Screen - {catid}</Text> */}
            <FlatList data={items} 
            keyExtractor={(item)=>item.id} 
            renderItem={renderMealItem}/>
            {/* {displayedMeals.map((item)=>(
                renderMealItem
            ))} */}
        </View>
    )
}

export default MealsList;