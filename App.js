import CategoriesScreen from "./screens/CategoriesScreen";
import {StatusBar, Text, Button} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <>
        <StatusBar style={"light"} />
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle : {
                        backgroundColor: '#351401'
                    },
                    headerTintColor: 'white',
                    contentStyle : {
                        backgroundColor: '#3f2f25'
                    }
                }}
            >
                <Stack.Screen name={"Meals Categories"} component={CategoriesScreen} options={{
                    title: "All Categories",

                }} />
                <Stack.Screen
                    name={"Meals Overview Categories"}
                    component={MealsOverviewScreen}
                    // options={({ route, navigation}) => {
                    //
                    //     const categoryId = route.params.categoryId;
                    //
                    //     return {
                    //         title: categoryId
                    //     }
                    // }}
                />
                <Stack.Screen
                    name={"MealDetails"}
                    component={MealDetailsScreen}
                    options={{
                        title: "Meal Details",
                        // headerRight: () => {return <Button title={"Tap me!"} />}
                    }
                } />
            </Stack.Navigator>
        </NavigationContainer>
      </>
  );
}