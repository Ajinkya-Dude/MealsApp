import { useEffect, useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../Components/MealItem';
import {CATEGORIES, MEALS} from '../data/dummy-data';
import Styles from './MealsOverviewScreenStyle';

function MealsOverviewScreen({route, navigation}){

    // useEffect(()=>{
    //     const categoryTitle=CATEGORIES.find((category)=> category.id === catid).title;

    //     navigation.setOptions({
    //         title:categoryTitle 
    //     })
    // },[navigation,catid]);

    useLayoutEffect(()=>{
        const categoryTitle=CATEGORIES.find((category)=> category.id === catid).title;

        navigation.setOptions({
            title:categoryTitle 
        })
    },[])

    const catid=route.params.categId;
    const displayedMeals=MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catid) >= 0;
    })



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
            <FlatList data={displayedMeals} 
            keyExtractor={(item)=>item.id} 
            renderItem={renderMealItem}/>
            {/* {displayedMeals.map((item)=>(
                renderMealItem
            ))} */}
        </View>
    )

}

export default MealsOverviewScreen;