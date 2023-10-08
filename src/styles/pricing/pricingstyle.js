import { StyleSheet } from "react-native";
import { DeviceHeight } from "../../constants/Dimenssion";

export const pricing = StyleSheet.create({
    pricingview: {
        display: "flex",
        backgroundColor: "black",
        flexDirection: "row",
        padding: 18,
        justifyContent: "space-between",
    },
    priceSet:{
        height: 6,
        width: 6,
        backgroundColor: "green",
        borderRadius: 50,            
    },
    priceNotSet:{
        height: 6,
        width: 6,
        backgroundColor: "red",
        borderRadius: 50,
    },
    pricingtext: {
        color: "white",
        fontSize: 25,
    },
    savebtn: {
        color: "white",
        fontSize: 18,
        padding: 11,
        borderRadius: 10,
        backgroundColor: "gray",
        textAlign: "center",
        marginRight: -73,
    },
    notification: {
        borderWidth: 0.3,
        borderColor: "gray",
        padding: 5,
        paddingTop: 10,
        paddingLeft: 7,
        borderRadius: 6,
    },
    scroll: {
        backgroundColor: "black",
    },
    scrolltext: {
        color: "white",

        //padding: 12,
        fontSize: 17,
        flexDirection: "row",
        // justifyContent:"space-around",
        fontWeight: "500",
        //backgroundColor: "black",
        // margin: 5,
        textAlign:"center",
        // marginBottom: 14,
        //borderRadius: 10,
    },
    checkboxview: {
        width: "90%",
        marginLeft: "5%",
        marginTop: 11,
        display: "flex",
        flexDirection: "column",
        paddingTop: 10,
    },
    checkBox: {
        backgroundColor: "white",
        top: 20,
    },
    equipmentView: {
        width: "90%",
        marginLeft: "5%",
        marginTop: 40,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBottom: 2,
        //backgroundColor:"red",
        marginBottom: 5
    },
    ManageText: {
        color: "white",
        bottom: 5,
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 5,
    },
    pricingdescription: {
        width: "90%",
        marginLeft: "5%",
        color: "#FFFFFFA3",
        fontWeight: "500",

    },
    textDes: {
        color: "#FFFFFFA3",
        fontWeight: "500",
        fontSize:12

    },
    plusSign: {
        color: "white",
        fontSize: 31,
        borderWidth: 0.3,
        borderColor: "white",
        width: 45,
        borderRadius: 8,
        textAlign: "center",
        paddingVertical: 10,
        //marginBottom: 30,
        // top: 8,
    },
    mainContainer: {
        // borderRadius: 0,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        backgroundColor: "#202124",
        width: "90%",
        marginLeft: "5%",
        //paddingBottom:50
        marginBottom: 30
    },
    equipmentContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomWidth: 0.2,
        borderBottomColor: "white",
        alignItems:"center"
        //marginVertical:10
    },
    leftFlex: {
        width: "50%",
        padding: 10,
    },
    rightFlex: {
        width: "50%",
        display: "flex",
        flexDirection: "row",
    },
    rupeeview: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#202020",
        width: "70%",
        marginVertical: 13,
        borderRadius: 10,
        justifyContent: "space-around",
        height: DeviceHeight / 15,
    },
    rupeeIcon: {
        marginVertical: 5,
        // height:10
        padding: 5,
    },
    deleteview: {
        // backgroundColor: 'red'
    },
    deleteIcon: {
        // backgroundColor: 'blue',
        padding: 10,
        marginVertical: 17,
        marginHorizontal: 8,
        borderWidth: 0.4,
        borderRadius: 10,
        borderColor: "white",
    },
    defaultEquipment: {
        //marginRight:80
        // right: 80,
        borderBottomWidth: 0.19,
        borderBottomColor: "#ffffffa3",
        padding: 10,
        //backgroundColor: "blue",
        justifyContent: "space-between",
        flexDirection: "row",
        //marginVertical:10
    },
});

export const backModalStyle = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modalContainer: {
        backgroundColor: "white",
        height: "20%",
        top: "32%",
        margin: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,

    },
    modalText: {
        width: "95%",
        marginLeft: 9,
        margin: 10,
        height: "50%",
        top: 10,
    },
    modalbutton: {
        width: "100%",
        height: "35%",
        borderTopWidth: 0.5,
        borderTopColor: "black",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        width: "50%",
        height: "100%",
        textAlign: "center",
        alignItems: "center",
        fontSize: 18,
    },
    yesText: {
        fontSize: 18, top: 10
    },
    NoText: {
        fontSize: 18, top: 10
    },
})


export const TabChangeModalStyle = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modalContainer: {
        backgroundColor: "white",
        height: "20%",
        top: "32%",
        margin: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,

    },
    modalText: {
        width: "95%",
        marginLeft: 9,
        margin: 10,
        height: "50%",
        top: 10,
    },
    modalbutton: {
        width: "100%",
        height: "35%",
        borderTopWidth: 0.5,
        borderTopColor: "black",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        width: "50%",
        height: "100%",
        textAlign: "center",
        alignItems: "center",
        fontSize: 18,
    },
    yesText: {
        fontSize: 18, top: 10
    },
    NoText: {
        fontSize: 18, top: 10
    },

});

export const lensModalStyle = StyleSheet.create({
    btn: {
        borderRadius: 8,
        marginTop: 34,
        paddingLeft: 20,
        padding: 11,
        backgroundColor: "#1E40AF",
        width: "90%",
        marginLeft: "5%",
        //bottom:-300
        position: "absolute",
        bottom: 80
    },
    emptyView: {
        color: "red",
        alignItems: "center",
        fontSize: 22,
        marginHorizontal: 30,
        textAlign: "center",
        marginVertical: 60
    },
    btntext: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
    },
    defaultequipment: {
        backgroundColor: "#19191C",
        top: 30,
        height: "100%",
        width: "100%",
        borderTopRightRadius: 20,
        position: "relative",
        borderTopLeftRadius: 20,
    },
    defaultequipmentView: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        marginRight: "5%",
        marginBottom: "5%",
        marginTop: 15,
    },
    text: {
        color: "white",
        fontSize: 20,
        padding: 8,
        marginBottom: 10,
        //width:"90%"
    },
    defaultview: {
        borderBottomWidth: 0.2,
        borderBottomColor: "white",
        width: "85%",
        marginLeft: "5%",
        justifyContent: "space-between",
        flexDirection: "row",
        //padding: 5,
        // backgroundColor:"red",
    },
})

export const cameraModalStyle = StyleSheet.create({
    btn: {
        // borderWidth: 1,
        // borderColor: "black",
        borderRadius: 8,
        marginTop: 34,
        paddingLeft: 20,
        padding: 11,
        backgroundColor: "#1E40AF",
        width: "90%",
        marginLeft: "5%",
    },
    btntext: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
    },
    defaultequipment: {
        backgroundColor: "#19191C",
        top: 30,
        height: "100%",
        width: "100%",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    defaultequipmentView: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        marginRight: "5%",
        marginBottom: "5%",
        marginTop: 15,
    },
    text: {
        color: "white",
        fontSize: 20,
        // backgroundColor:"red",
        padding: 8,
        marginBottom: 10,

    },
    defaultview: {
        borderBottomWidth: 0.2,
        borderBottomColor: "white",
        width: "85%",
        marginLeft: "5%",
        justifyContent: "space-between",
        flexDirection: "row",
        //padding: 5,

    },
})

export const defaultEquipmentModal = StyleSheet.create({
    equipmentpage: {
        backgroundColor: "#19191C",
        marginTop: 40,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        minHeight: "100%",
    },
    equipmentpageView: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        marginRight: "5%",
    },

    equipmentview: {
        //backgroundColor: "green",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        //width:"90%"
    },

    equipmenttext: {
        color: "white",
        //backgroundColor: "blue",
        padding: 10,
        marginTop: 8,
        marginLeft: 8,
        fontSize: 19,
        width: "85%",
    },
    checkBox: {
        //backgroundColor: "white",
        top: 19,
        marginRight: "10%",
    },
    totalequipments: {
        paddingVertical: 20,
        // backgroundColor:"red",
        // width:"60%"
    },
    buttonview: {
        display: "flex",
        flexDirection: "row",
        // padding: 19,
        // backgroundColor:"red",
        alignItems:"center",
        justifyContent: "space-around",
    },
    buttontext: {
        borderRadius: 20,
        backgroundColor: "#27282D",
        padding: 17,
        width: "40%",
    },
})