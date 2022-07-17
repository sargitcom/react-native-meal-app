import {Image, Platform, StyleSheet, Text, View} from "react-native";

const MealDetails = ({duration, complexity, affordability, style, textStyle }) => {
    return <>
        <View style={[styles.details, style]}>
            <Text style={[styles.detailsItem, textStyle]}>{duration}m</Text>
            <Text style={[styles.detailsItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailsItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    </>
}

export default MealDetails;

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