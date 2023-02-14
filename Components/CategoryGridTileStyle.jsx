import { StyleSheet, TouchableHighlight, Platform, Dimensions } from "react-native";

const { width , height }=Dimensions.get('window');

const Styles=StyleSheet.create({
    gridItem:{
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        height: 80,
        elevation: 4,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS==="android" ? 'hidden' : 'visible'    
    },
    display:{
        // padding: 25, 
        margin: 25, 
        width: width/3, 
        height: 130, 
        borderWidth: 1, 
        elevation: 4,
        borderRadius: 8,
        // alignContent: "center"
    },
    display2:{
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "left"
    },
    innerContainer:{
        flex: 1,
        padding: 16,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonStyle:{
        flex:1,
        alignItems: "center",
        justifyContent: "center"    
    },
    buttonPressed:{
        opacity: 0.5,
        
    },
    title:{
        fontWeight: "bold",
        fontSize: 18
    }
})

export default Styles;