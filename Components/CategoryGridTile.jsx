import { View, Pressable, Text } from "react-native";
import Styles from "./CategoryGridTileStyle";

function CategoryGridTile(props) {
    //console.log(props.index);
    function pressHand() {
        props.takeId(props.id);
    }
    
    return (


        <View style={[{backgroundColor: props.color},Styles.display]}>
            <Pressable
            style={({ pressed }) => [Styles.buttonStyle, pressed ? Styles.buttonPressed : null]}
            android_ripple= {{color: "#ccc"}}
            onPress={pressHand}
            >
            <Text style={Styles.display2}>{props.title}</Text>
            </Pressable>
        </View>


        
        // <View style={Styles.gridItem}>
        //             <Pressable android_ripple={{ color: "#ccc" }}
        //                 style={({ pressed }) => [Styles.buttonStyle, pressed ? Styles.buttonPressed : null]}
        //                 //onPress={props.onPress} 
        //                 onPress={pressHand}
        //             >
        //                 <View style={[Styles.innerContainer, { backgroundColor: props.color }]}>
        //                     <Text style={Styles.title}>{props.title}</Text>
        //                 </View>
        //             </Pressable>
        // </View>



        // <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", alignContent: "flex-start" }}>
        //     <View style={{ flex: 1 }}>
        //         {props.index % 2 === 0 && <View style={Styles.gridItem}>
        //             <Pressable android_ripple={{ color: "#ccc" }}
        //                 style={({ pressed }) => [Styles.buttonStyle, pressed ? Styles.buttonPressed : null]}
        //                 //onPress={props.onPress} 
        //                 onPress={pressHand}
        //             >
        //                 <View style={[Styles.innerContainer, { backgroundColor: props.color }]}>
        //                     <Text style={Styles.title}>{props.title}</Text>
        //                 </View>
        //             </Pressable>
        //         </View>}
        //     </View>
        //     <View style={{ flex: 1 }}>
        //         {props.index % 2 !== 0 && <View style={Styles.gridItem}>
        //             <Pressable android_ripple={{ color: "#ccc" }}
        //                 style={({ pressed }) => [Styles.buttonStyle, pressed ? Styles.buttonPressed : null]}
        //                 //onPress={props.onPress} 
        //                 onPress={pressHand}
        //             >
        //                 <View style={[Styles.innerContainer, { backgroundColor: props.color }]}>
        //                     <Text style={Styles.title}>{props.title}</Text>
        //                 </View>
        //             </Pressable>
        //         </View>}
        //     </View>
        // </View>
    )
}

export default CategoryGridTile;

