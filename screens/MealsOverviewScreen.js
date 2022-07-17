import {useLayoutEffect} from "react";

import {StyleSheet, Text, View, FlatList} from "react-native";

import {useRoute} from "@react-navigation/native";

import { MEALS, CATEGORIES } from './../data/data';
import MealItem from "../components/MealItem";

const MealsOverviewScreen = ({ route, navigation }) => {
    // const route = useRoute();

    const categoryId = route.params.categoryId;

    const categoryTitle = CATEGORIES.find((item) => item.id === categoryId);

    useLayoutEffect(()=> {
        navigation.setOptions({
            title: categoryTitle.title,
        });
    }, [navigation, categoryTitle])

    const displayedMeals = MEALS.filter(item => item.categoryIds.includes(categoryId));

    const renderMealsHandler = (itemData) => {
        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
            duration: itemData.item.duration,
        }

        return <MealItem {...mealItemProps}></MealItem>
    }

    return <View style={styles.container}>
        <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealsHandler} />
    </View>
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});