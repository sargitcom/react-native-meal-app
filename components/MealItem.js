import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';

import {useNavigation} from "@react-navigation/native";
import MealDetails from "./MealDetails";
import image from "react-native-web/dist/exports/Image";

const MealItem = ({id, title, imageUrl, duration, complexity, affordability}) => {
    const navigation = useNavigation();

    const goToMealDetailsScreenHandler = () => {
        navigation.navigate("MealDetails", {
            mealId: id,
        });
    }

    return <View style={styles.mealItem}>
        <Pressable
            android_ripple={{color: '#ccc'}}
            style={({pressed}) => pressed ? styles.buttonPressed : null}
            onPress={goToMealDetailsScreenHandler}
        >
            <View style={styles.innerContainer}>
                <View>
                    <Image style={styles.image} source={{uri: imageUrl}} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails title={title} imageUrl={imageUrl} duration={duration} complexity={complexity} affordability={affordability} />
            </View>
        </Pressable>
    </View>
}

export default MealItem;

const styles = StyleSheet.create({
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'visible' : "hidden",
        backgroundColor: 'white',
        elevation: 4,
        shadowRadius: 8,
        shadowOpacity: 0.25,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8,
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    },
    detailsItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});