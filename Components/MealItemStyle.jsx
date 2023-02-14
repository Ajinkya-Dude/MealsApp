import { StyleSheet , Platform } from "react-native";

const Styles=StyleSheet.create({
    mealItem:{
        margin: 16,
        borderRadius: 8,
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS==="android" ? 'hidden' : 'visible'    

    },
    innerCotainer: {
        borderRadius: 8,
        overflow: "hidden"
    },
    image:{
        width: "100%",
        height: 200
    },
    title:{
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8
    },
    details:{
        flexDirection: "row",
        alignItems: "center",
        padding: 8,
        justifyContent: "center"
    },
    detailItem:{
        marginHorizontal: 4,
        fontSize: 12,
    },
    buttonPressed:{
        opacity: 0.5
    }
})

export default Styles;