import { FlatList, View, StyleSheet, ViewComponent, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CategoryGridTile from "../Components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import Icon from "react-native-vector-icons/Ionicons";



function CategoriesScreen({ navigation }) {

    navigation.setOptions({
        drawerIcon: ({color,size})=> <Icon name="list" color={color} size={size} />
    })

    function renderCategoryItem(itemData) {


        function pressHandler() {
            navigation.navigate('ComponentOverview', {
                categId: itemData.item.id
            
            })
        }

        return <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onPress={pressHandler} />;
    }





    var arr = CATEGORIES;
    // {arr.map((item)=>(
    //     <CategoryGridTile 
    //     title={item.title} 
    //     color={item.color}
    //     //onPress={pressHandler}
    //      />
    //     // console.log(item.title+"-"+item.color)
    // ))}    
    function giveId(id) {
        navigation.navigate('ComponentOverview', {
            categId: id
        })
    }

    return (
        // <FlatList data={CATEGORIES}
        // keyExtractor={(item)=>item.id}
        // renderItem={renderCategoryItem} 
        // numColumns={2}/>    

        <>

            <ScrollView style={{flex:1}}>
            <View style={{flex: 1, flexDirection: "row",margin: 10, flexWrap: "wrap"}}>
                {arr.map((item) => (
                    <CategoryGridTile
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        color={item.color}
                        index={arr.indexOf(item)}
                        takeId={giveId}
                    />

                ))}
            </View>
                {/* <View style={{flex: 1, flexDirection: "column" }}>
                  
                {arr.map((item)=>console.log(item))}
                    {arr.map((item) => (
                        <>
                            <View style={{ flex: 1 }}>
                                {arr.indexOf(item) % 2 === 0 && <CategoryGridTile
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    color={item.color}
                                    //onPress={pressHandler}
                                    takeId={giveId}
                                />}
                            </View>
                            <View style={{ flex: 1 }}>
                                {arr.indexOf(item) % 2 !== 0 && <CategoryGridTile
                                    key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    color={item.color}
                                    //onPress={pressHandler}
                                    takeId={giveId}
                                />}
                            </View>
                        </>
                    ))}
                
                </View> */}



            </ScrollView>

        </>
    )
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    container: {

        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: 'flex-start',

    },
    item: {
        // flex: 0.5,
        // height: 100,
        // width: 100,
        // padding: 10,
        width: "50%",

    }
})