import { StyleSheet } from "react-native";
import { color } from "../globalStyle";


export default preferenceStyle = StyleSheet.create({

    cityview: {
        top: 20

    },
    list: {
        display: 'flex',
        flexDirection: "row",
        flexWrap: "wrap"
    },
    textheading: {
        fontSize: 23,
        color: "white",
        marginTop: 40,
        marginBottom: 20,
        fontSize: 29
    },
    cityname: {
        color: color.textColor5,
        backgroundColor: color.textColor10,
        margin: 3,
        minWidth: 50,
        padding: 15,
        borderRadius: 6,
        fontSize: 17,
        textAlign: "center",
    },

    citynameSelected: {
        color: "#FFFFFF",
        backgroundColor: "rgba(43 ,219, 140 ,0.32)",
        margin: 3,
        minWidth: 50,
        padding: 15,
        borderRadius: 6,
        fontSize: 17,
        textAlign: "center",


    },

})
