import {useLayoutEffect} from "react";
import {Image, StyleSheet, ScrollView, Text, View, Button} from "react-native";
import MealDetails from "../components/MealDetails";

import {MEALS} from "../data/data";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

const MealDetailsScreen = ({route, navigation}) => {
    const mealId = route.params.mealId;

    const meal = MEALS.find(item => item.id === mealId);

    const duration = meal.duration;
    const complexity = meal.complexity;
    const affordability = meal.affordability;

    const headerButtonPressHandler = () => {
        console.log('pressed');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon={"star"} color={"white"} onPress={headerButtonPressHandler} />
            }
        });
    }, [navigation, headerButtonPressHandler]);

    return <ScrollView style={styles.rootContainer}>
        <Image source={{uri: meal.imageUrl}} style={styles.image} />
        <Text style={styles.title}>{meal.title}</Text>

        <MealDetails
            duration={duration}
            complexity={complexity}
            affordability={affordability}
            textStyle={styles.detailText}
        />

        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients:</Subtitle>
                <List data={meal.ingredients} />

                <Subtitle>Steps:</Subtitle>
                <List data={meal.steps} />
            </View>
        </View>
    </ScrollView>
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
    },
    subtitleContainer: {
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        marginHorizontal: 24,
        marginVertical: 4,
    },
    listContainer: {
        width: '80%',
    },
    listOuterContainer: {
        width: '100%',
        alignItems: "center",
    }
});