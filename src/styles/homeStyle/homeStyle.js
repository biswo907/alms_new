import { StyleSheet } from "react-native";
import { DeviceHeight, DeviceWidth } from '../../constants/Dimenssion'


export const homeHeader = StyleSheet.create({
    headercontainer: {
        backgroundColor: '#19191C'
    },
    headerview: {
        display: 'flex',
        backgroundColor: "black",
        flexDirection: 'row',
        padding: 25,
        justifyContent: 'space-between'

    },
    headertext: {
        color: "#1185E0",
        fontSize: 25,
    },
})




export const home = StyleSheet.create({
    MainView: {
        minHeight: '100%', backgroundColor: '#19191C'
    },
    Body: {
        width: DeviceWidth * 94 / 100, marginLeft: DeviceWidth * 3 / 100
    },
    profileview: {
        // backgroundColor: 'red',
        height: DeviceHeight / 7,
        flexDirection: "row",
        // justifyContent: "space-between"
    },

    profileLogo: {
        padding: DeviceWidth / 20,

    },
    pickImgStyle: {
        height: 70, width: 70, borderRadius: 50, marginHorizontal: 10, marginVertical: 15
    },
    profileView: {
        width: DeviceWidth / 1.4,
        paddingVertical: DeviceWidth / 15,
    },
    profileName: {
        color: 'white', fontSize: 25, fontWeight: "500"
    },
    profileEmail: {
        color: "white", fontSize: 15, fontWeight: "500", color: "#ffffffA3"
    },
    progressbar: {
        backgroundColor: '#094B7E',
        height: DeviceHeight / 9,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: 'space-between',
        width: DeviceWidth / 1.1,
        marginLeft: DeviceWidth / 50,
        alignItems: "center"

    },
    leftProgressBar: {
        // backgroundColor: 'green',
        width: DeviceWidth * 25 / 100,
        alignItems: "center"
    },
    progressbarPercentage: {
        color: 'white', fontSize: 16, fontWeight: "500"
    },
    progressbarComplete: {
        color: '#FFFFFFA3', fontSize: 12
    },

    rightProgressBar: {
        //backgroundColor: 'red',
        //width: DeviceWidth * 75 / 100

    },

    icons: {
        textAlign: "right",
        width: DeviceWidth * 18 / 100,
        color: "#ffffffa3"
    },
    iconsright: {
        color: '#818191',
        fontWeight: "bold",
        fontSize: 22
    },
    verifyBtn: {
        color: "white",
        //backgroundColor: "blue",
        fontSize: 16,
        //borderRadius: 10,
        paddingVertical: 10,
        marginHorizontal: 7,
        //  marginVertical: 10, 
        textAlign: "center",
        //width: "60%", 
        // left: "30%", 
        //  marginHorizontal: 5
    },
    verifybtnBox: {
        color: "white",
        backgroundColor: "#11a911",
        //fontSize: 18,
        borderRadius: 7,
        //paddingVertical: 10, 
        // textAlign: "center", 
        width: "65%",
        left: "25%",
        //overflow:"hidden", 
        marginHorizontal: 5
    },
    bookingMainView: {
        height: DeviceHeight / 7,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: '#202124',
        width: DeviceWidth * 44 / 100,
        marginLeft: '3%'
    },
    bookingView: {
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10,
        paddingVertical: 20
    },
    bookingLength: {
        backgroundColor: "#094B7E",
        marginHorizontal: "17%",
        right: "10%",
        alignItems: "center",
        borderRadius: 5,
        padding: 5
    },
    GalleryBox: {
        height: DeviceHeight / 7,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: '#202124',
        width: DeviceWidth * 44 / 100,
        marginLeft: '3%'
    },
    GalleryBoxView: {
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10,
        paddingVertical: 20
    },
    GalleryText: {
        color: 'white', fontSize: 20, fontWeight: "500", top: 5
    },
    GalleryStatus1: {
        height: 7,
        width: 7,
        backgroundColor: "green",
        borderRadius: 50,
        marginLeft: -9,
        marginTop: 5
    },
    GalleryStatus2: {
        height: 7,
        width: 7,
        backgroundColor: "red",
        borderRadius: 50,
        marginLeft: -9,
        marginTop: 5
    },

    EditProfileBox: {
        height: DeviceHeight / 7,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: '#202124',
        width: DeviceWidth * 44 / 100,
        marginLeft: '3%'
    },
    EditProfileBoxView: {
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10,
        paddingVertical: 20
    },
    EditProfileText: {
        color: 'white',
        fontSize: 20,
        fontWeight: "500",
        top: 5
    },
    EditProfileStatus1: {
        height: 7,
        width: 7,
        backgroundColor: "green",
        borderRadius: 50,
        marginLeft: -9,
        marginTop: 5
    },
    EditProfileStatus2: {
        height: 7,
        width: 7,
        backgroundColor: "red",
        borderRadius: 50,
        marginLeft: -9,
        marginTop: 5
    },

    EquipmentBox: {
        height: DeviceHeight / 7,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: '#202124',
        width: DeviceWidth * 44 / 100,
        marginLeft: '3%'

    },
    EquipmentBoxView: {
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10,
        paddingVertical: 20

    },
    EquipmentText: {
        color: 'white',
        fontSize: 20,
        fontWeight: "500",
        top: 5,
    },
    EquipmentStatus1: {
        height: 7,
        width: 7,
        backgroundColor: "green",
        borderRadius: 50,
        marginLeft: -9,
        marginTop: 5
    },
    EquipmentStatus2: {
        height: 7,
        width: 7,
        backgroundColor: "red",
        borderRadius: 50,
        marginLeft: -9,
        marginTop: 5

    },
})




export const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0,0, 0.8)',
    },
    modalContainer: {
        backgroundColor: "white",
        height: "20%",
        top: "32%",
        margin: 10,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        elevation: 5,

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
