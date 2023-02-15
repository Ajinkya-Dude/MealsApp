import { useEffect, useLayoutEffect } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../Components/MealItem';
import MealsList from '../Components/MealsList/MealsList';
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


    return <MealsList items={displayedMeals} />


}

export default MealsOverviewScreen;