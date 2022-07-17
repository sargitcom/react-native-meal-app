import { FlatList } from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryGridTile from "../components/CategoryGridTile";
import {} from '@react-navigation/native'

const CategoriesScreen = ({ navigation }) => {

    const renderCategoryItem = (item) => {
        const pressHandler = () => {
            navigation.navigate(
                "Meals Overview Categories",
                {
                    categoryId: item.item.id
                }
            );
        }

        return <CategoryGridTile title={item.item.title} color={item.item.color} onPress={pressHandler} />
    }

    return <>
        <FlatList
            data={CATEGORIES}
            keyExtractor={item => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    </>
}

export default CategoriesScreen;