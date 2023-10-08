import { StyleSheet } from "react-native";
import { DeviceHeight } from "../../constants/Dimenssion";

export const editprofileheader = StyleSheet.create({
    headerview: {
        display: "flex",
        backgroundColor: "black",
        flexDirection: "row",
        padding: 25,
        justifyContent: "space-between",
    },
    headertext: {
        color: "white",
        fontSize: 22,
        minWidth: "50%",
        fontWeight: "500"
    },
    savebtn: {
        color: 'white',
        fontSize: 16,
        padding: 11,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 15,
        backgroundColor: '#1D4ED8',
        textAlign: "center",
        fontWeight: "500",
        top: -5,
        left: -5

    },
    changeSavebtn: {
        color: 'white',
        fontSize: 16,
        padding: 11,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 15,
        backgroundColor: 'grey',
        textAlign: "center",
        fontWeight: "500",
        top: -5,
        left: -5
    },
    notification: {
        borderWidth: 0.3,
        borderColor: 'gray',
        padding: 5,
        paddingTop: 10,
        paddingLeft: 7,
        borderRadius: 6,
        bottom: 3
    },
    showImg: {
        width: 100,
        height: 100,
        backgroundColor: "white",
    },
});


export const editprofile = StyleSheet.create({
    pagebody: {
        backgroundColor: "#19191C",
        paddingBottom: "20%"
    },
    basicinfotext: {
        fontSize: 25,
        color: "white",
        marginTop: 15,
        marginBottom: 15,
        fontWeight: "500"
    },
    adharImageStyle: {
        color: "white",
        marginLeft: "70%",
        bottom: 7,
        fontWeight: "500",
        fontSize: 16,
        textAlign: "center",
    },
    adharImageView: {
        flexDirection: "row",
        color: "white",
        marginLeft: "70%",
        bottom: 7,
        fontWeight: "500",
        fontSize: 16,
    },
    adharImageText: {
        color: "white",
        fontWeight: "500",
        marginLeft: 17,
        fontSize: 16,
    },
    panImageStyle: {
        color: "white",
        marginLeft: "70%",
        bottom: 7,
        fontWeight: "500",
        fontSize: 16,
        textAlign: "center",
    },
    panImageView: {
        flexDirection: "row",
        color: "white",
        marginLeft: "70%",
        bottom: 7,

        fontWeight: "500",
        fontSize: 16,
    },
    panImageText: {
        color: "white",
        fontWeight: "500",
        marginLeft: 17,
        fontSize: 16,
    },
    gstStyle: {
        color: "white",
        marginLeft: "70%",
        bottom: 7,
        fontWeight: "500",
        fontSize: 16,
        textAlign: "center",
    },
    gstView: {
        flexDirection: "row",
        color: "white",
        marginLeft: "70%",
        bottom: 7,
        fontWeight: "500",
        fontSize: 16,
    },
    gstText: {
        color: "white",
        fontWeight: "500",
        marginLeft: 17,
        fontSize: 16,
    },
});

// POPUP Modal Style
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
});


export const aboutgroup = StyleSheet.create({
    view: {
        backgroundColor: "#27292d",
        borderRadius: 5,
        color: "#FFFFFFA3",
        padding: 5,
        bottom: 20,
    },
    important: {
        color: "red",
        marginTop: 30,
        marginBottom: 0,
        bottom: 12,
        fontWeight: "500",
        fontSize: 21
    },
    labeltext: {
        color: "#FFFFFFA3",
        // marginTop: 30,
        // marginBottom: 10,
        // bottom: 20,
        fontWeight: "500",
        fontSize: 16
    },

})


export const photogroup = StyleSheet.create({
    Adhar: {
        display: "flex",
        flexDirection: "row",
    },
    Adharlabeltext: {
        color: "#FFFFFFA3",
        bottom: 2,
        fontWeight: "500",
        fontSize: 16
    },
    adhartextinputview: {
        backgroundColor: "#27292d",
        // color: "#FFFFFFA3",
        borderRadius: 8,
        marginTop: 8,
        marginBottom: 15,
        paddingLeft: 20,
        padding: 15,
        width: "70%",
        marginRight: "5%",
        color: "white",
        fontSize: 16,
        fontWeight: "500"
    },
    adharfileview: {
        // borderColor: "white",
        // borderWidth: 2,
        width: "25%",
        backgroundColor: "#27292d",
        color: "#FFFFFFA3",
        borderRadius: 8,
        marginTop: 8,
        marginBottom: 15,
        paddingLeft: 20,
        padding: 15,
    },
})

export const formgroup = StyleSheet.create({
    view: {
        color: "#FFFFFFA3",
        borderRadius: 8,
        bottom: 20,
    },
    textinput: {
        color: 'white',
        backgroundColor: "#27292d",
        // borderWidth: 1,
        // borderColor: 'red', //Use Condictionlly
        padding: 10,
        //backgroundColor:"red",
        //backgroundColor:"red",
        borderRadius: 10,
        fontSize: 18,
        fontWeight: "500"


    },
    labeltext: {
        color: "#FFFFFFA3",
        marginTop: 10,
        // backgroundColor: 'green',
        // display: "flex",
        bottom: 25,
        fontWeight: "500",
        fontSize: 12
    },
});

export const UploadImagePopUpStyle = StyleSheet.create({
    imgbox: {
        //width:"90%",
        height: "90%",
        borderWidth: 2,
        borderColor: "green",
        borderRadius: 7
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 5
    },
    view1: {
        backgroundColor: "transparent", width: "100%", height: "100%", marginLeft: "2%"
    },
    view2: {
        height: "31%", width: "95%", backgroundColor: "white", borderRadius: 10
    },
    view3: {
        width: "98%", height: "90%", marginTop: "0%", marginLeft: "1%"
    },
    view4: {
        flexDirection: "row", justifyContent: "space-between", paddingVertical: 7, marginHorizontal: 9
    },
    imageText: {
        fontSize: 16, fontWeight: "500"
    }
})

export const kycview = StyleSheet.create({
    mainview: { flexDirection: "row", marginVertical: 10, alignItems: "center", borderBottomWidth: 1, borderBottomColor: "white", justifyContent: "space-between" },
    label: { color: "#FFFFFFA3", marginBottom: 10, fontSize: 16, fontWeight: "700" },
    iconBox: { height: 40, width: 40, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "#fff", backgroundColor: "#202124", borderRadius: 5, borderStyle: 'dotted', marginBottom: 8 },
    important: { color: "red" }
})