import CategoriesScreen from "./screens/CategoriesScreen";
import {StatusBar, Text, Button} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return <Drawer.Navigator
        screenOptions={{
            headerStyle : {
                backgroundColor: '#351401'
            },
            headerTintColor: 'white',
            sceneContainerStyle : {
                backgroundColor: '#3f2f25'
            },
            drawerContentStyle: { backgroundColor: '#351401' },
            drawerActiveBackgroundColor: '#e4aab1',
        }}
    >
        <Drawer.Screen name={"Categories"} component={CategoriesScreen} />
        <Drawer.Screen name={"Favorites"} component={FavoritesScreen} />
    </Drawer.Navigator>
}

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
                <Stack.Screen name={"Meals Categories"} component={DrawerNavigator} options={{
                    // title: "All Categories",
                    headerShown: false,
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
