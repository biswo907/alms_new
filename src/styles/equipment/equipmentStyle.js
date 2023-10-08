import { StyleSheet } from "react-native";
import { DeviceHeight } from "../../constants/Dimenssion";

export const Equipment = StyleSheet.create({
    container: {
        backgroundColor: "#19191C",
        minHeight: DeviceHeight - 50,
        //height:"100%"
    },
    addEquipmentView: {
        width: "90%", marginLeft: "5%", marginBottom: 10
    },
    EquipmentList: {
        width: "90%",
        marginLeft: "5%",
        padding: 15,
        marginTop: 5,
        borderBottomWidth: 0.3,
        borderColor: "white",
        alignItems: "center"

    },

    EquipmentContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        // backgroundColor:"red"
    },
    EquipmentText: {
        width: "80%",
        color: "white",
        fontSize: 18,
        padding: 4,
        marginBottom: 10,
        fontWeight: "400",
        marginLeft: 5
    },
    addEquipment: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10,
        padding: 10,
        textAlign: "center",
        //marginLeft:10 
    },
    textadd: {
        color: "#ffffffa3",
        fontSize: 18,
        paddingLeft: 10,
        // fontWeight:"00",
    },
})

export const styles = StyleSheet.create({
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
    }
});


export const equipmentListStyle = StyleSheet.create({
    equipmentpage: {
        backgroundColor: "#19191C",
        //backgroundColor: "blue",
        // marginTop: 140,
        marginTop: 50,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        //minHeight: DeviceHeight,
        height: DeviceHeight,
    },
    EquipmentListView: {
        marginBottom: 20,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        marginRight: "5%",

    },
    EquipmentListText: {
        marginLeft: "5%",
        color: "#FFFFFF52",
        marginTop: 20,
        fontWeight: "500",
    },

    equipmentview: {
        //backgroundColor: "green",
        display: "flex",
        flexDirection: "row",
        // height:"20%"

        // justifyContent: "space-between"
    },
    totalequipments: {
        width: "90%",
        marginLeft: "5%",
        // marginVertical:5,
        //backgroundColor:"white",
        //height:"20%"
    },
    equipmenttext: {
        color: "white",
        //padding: 10,
        //marginTop: 8,
        // marginLeft: 8,
        fontSize: 19,
        //margin:20
        width: "80%",
        marginVertical: 20,
        // textAlign:"left"
        //  backgroundColor:"green"
    },
    serchBox: {
        backgroundColor: "#27292D",
        padding: 15,
        borderRadius: 10,
        fontSize: 18,
        color: "white",
        width: "90%",
        marginLeft: "5%",
    },
    checkBox: {
        //borderColor: "white",
        marginHorizontal: 20,
        marginVertical: 20,
        top: 3,
        borderWidth: 1,
       // backgroundColor: "white",
        borderColor: "white",
    },
    uncheck: {
        backgroundColor: "white",
        top: 19,
        marginRight: "5%",
        color: "blue",
    },

    buttonview: {
        //display: "flex",
        flexDirection: "row",
        // padding: 19,
        justifyContent: "space-around",
        // top:20,
        // marginTop:"15%",
        height: "15%",
        // backgroundColor: "#19191c",
        alignItems: "center",
        //paddingTop:30
        //  marginVertical:60
    },
    buttontext: {
        borderRadius: 20,
        backgroundColor: "#27282D",
        padding: 17,
        width: "40%",
        textAlign: "center",
    },
});


export const newequipment = StyleSheet.create({
    about: {
        borderColor: "red",
        borderWidth: 3,
    },
    maincontainer: {
        backgroundColor: "#1E1E1E",
        minHeight: "100%",
        top: 50,
    },
    headerpart: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 25,
        borderBottomWidth: 0.2,
        marginBottom: 20,
        borderColor: "gray",
        paddingBottom: 30,
    },
    headertext: {
        color: "#FFFFFF99",
        fontWeight: "400"
    },

    textinput: {
        backgroundColor: "#27292D",
        color: "white",
        marginTop: 10,
        padding: 15,
        borderRadius: 10,
        fontWeight: "400"

    },
    textinputerror: {
        backgroundColor: "#27292D",
        marginTop: 10,
        padding: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "red",
        color: "white",
        fontWeight: "400"

    },
    LoginBtn: {
        borderRadius: 15,
        marginTop: 34,
        paddingLeft: 20,
        padding: 11,
        backgroundColor: "#1E40AF",
        width: "48%",
        bottom: 55,
    },
    buttonDisable: {
        borderRadius: 15,
        marginTop: 34,
        paddingLeft: 20,
        padding: 11,
        backgroundColor: "grey",
        width: "48%",
        bottom: 55,
    },
    LoginText: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        //bottom:49
    },
    showImg: {
        borderRadius: 7,
        width: 120,
        height: 120,
        paddingVertical: 40,
        paddingHorizontal: 40,
        bottom: 75,
        left: -40,
    },
    ImgUpload: {
        backgroundColor: "#27292D",
        borderRadius: 10,
        width: 120,
        height: 120,
    },
    ImgUploadError: {
        width: 120,
        height: 120,
        backgroundColor: "#27292D",
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 10,
    },
    dropdown: {
        width: "100%",
        borderRadius: 10,
        height: 55,
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "white"
    },
    errroDropdown: {
        width: "100%",
        borderRadius: 10,
        height: 55,
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "red"
    },
});

export const successFulModal = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modalContainer: {
        backgroundColor: "white",
        height: "25%",
        top: "32%",
        margin: 10,
        borderRadius: 15

    },
    textcontainer: {
        width: "95%",
        marginLeft: 9,
        margin: 10,
        height: "80%",
        top: 6,
        //backgroundColor:"green"
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
    modalView: {
        height: "100%",
        width: "100%",
        backgroundColor: "transparent"
    },
    tnxText: {
        color: "#1E3A8A",
        padding: 7,
        backgroundColor: "#DBEAFE",
        width: "30%",
        textAlign: "center",
        borderRadius: 7,
        marginLeft: 0,
        fontWeight: "400",
        fontSize: 16
    }
});