import { StyleSheet } from "react-native";
import { DeviceHeight, DeviceWidth } from "../../constants/Dimenssion";
import { responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize } from "react-native-responsive-dimensions";

export const locationStyle = StyleSheet.create({

    primerypage: {
        backgroundColor: '#19171C',
        minHeight: 989
    },
    secondarypage: {
        width: '90%',
        marginLeft: '5%'
    },
    descripctiontext: {
        color: '#FFFFFFA3',
        fontSize: 16,
        marginBottom: 40,
        marginTop: 30
    },
    flexvieww: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        minHeight: '6%',
        borderBottomWidth: 0.2,
        borderBottomColor: '#FFFFFFA3',
        marginBottom: 40
    },
    flexleft: {
        // backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'row'
    },
    flexRight: {
        // backgroundColor: 'aqua', 
        display: 'flex',
        flexDirection: 'row',
        padding: 12
    },
    cityview: {

    },
    locationicon: {
        // backgroundColor: 'yellow', 
        padding: 15,
        // color: '#1D4ED8'
    },
    cityname: {
        fontSize: 20,
        color: '#FFFFFFA3',
    },
    primerylocationtext: {
        color: '#FFFFFFA3',
    },
    changetext: {
        marginRight: 15,
        color: '#FFFFFFA3',

    },
    tickicon: {
        // color: 'green'
    },
    SaveBtn: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 15,
        marginTop: 34,
        paddingLeft: 20,
        padding: 15,
        backgroundColor: "#1E40AF",
        width: "90%",
        marginLeft: "5%",
        marginBottom: 21

    },
    SaveText: {
        color: "white",
        fontSize: 18,
        textAlign: "center"

    },
})

export const locationHeaderStyle = StyleSheet.create({
    headerview: {
        display: 'flex',
        backgroundColor: "black",
        flexDirection: 'row',
        paddingVertical: responsiveScreenWidth(4),
        paddingHorizontal: responsiveScreenWidth(2),
        justifyContent: 'space-between',

    },
    headertext: {
        color: "white",
        fontSize: responsiveScreenFontSize(2.5),
        fontWeight: "500"
    },
    savebtn: {
        borderRadius: responsiveScreenWidth(2),
        paddingVertical: responsiveScreenWidth(2),
        paddingHorizontal: responsiveScreenWidth(3.5),
        backgroundColor: '#1D4ED8',
    }

})

export const locationInputBox = StyleSheet.create({
    label: {
        // marginVertical: 1,
        fontSize: 14,
        color: "white",
        marginTop: 5
    },
    inputContainer: {
        backgroundColor: "#27292d",
        color: "#FFFFFF",
        borderRadius: 8,
        marginTop: 8,
        // backgroundColor: 'red',
        marginBottom: 15,
        paddingLeft: 20,
        padding: 15,
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-between'

    },
    textColor: {
        color: "#FFFFFFA3"
    }
})

export const locationModal = StyleSheet.create({
    maincontainer: {
        backgroundColor: '#242327',
        top: 30,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        minHeight: DeviceHeight
    },
    container: {
        width: '90%',
        marginLeft: '5%'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10

    },
    serchBox: {
        backgroundColor: '#27292D',
        padding: 15,
        marginTop: 10,
        borderRadius: 10,
        fontSize: 19,
        color: 'white'
    },
    locatiionback: {
        borderBottomWidth: 0.2,
        borderColor: 'white',
        padding: 2,
        paddingTop: 15,
        paddingBottom: 15,
        // backgroundColor: 'red',
        marginTop: 7,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pageBody: {
        marginTop: 20,
        // marginBottom: 90,
        // minHeight: "60%",
        // backgroundColor: 'gray',
        width: '90%',
        marginLeft: '5%',
    },
    SaveBtn: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 15,
        // marginTop: 34,
        paddingLeft: 20,
        padding: 15,
        backgroundColor: "#1E40AF",
        width: "90%",
        marginLeft: "5%",
        // marginBottom: 21
        marginVertical: "10%"

    },
    SaveText: {
        color: "white",
        fontSize: 18,
        textAlign: "center"

    },

})

export const tempLocationModalstyle = StyleSheet.create({
    maincontainer: {
        backgroundColor: '#242327',
        top: 30,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        minHeight: DeviceHeight,

    },
    container: {
        width: '90%',
        marginLeft: '5%',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10

    },
    serchBox: {
        backgroundColor: '#27292D',
        padding: 15,
        marginTop: 10,
        borderRadius: 10,
        fontSize: 19,
        color: 'white'
    },
    locatiionback: {
        borderBottomWidth: 0.2,
        borderColor: 'white',
        padding: 2,
        paddingTop: 15,
        paddingBottom: 15,
        // backgroundColor: 'red',
        marginTop: 7,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    pageBody: {
        marginTop: 20,
        marginBottom: 20,
        minHeight: '100%',
        // backgroundColor: 'gray',
        width: '90%',
        marginLeft: '5%'
    },
    SaveBtn: {
        borderWidth: 0.5,
        borderColor: "black",
        borderRadius: 15,
        // marginTop: 34,
        paddingLeft: 20,
        padding: 15,
        backgroundColor: "#1E40AF",
        width: "90%",
        marginLeft: "5%",
        // marginBottom: 21
        marginVertical: "10%"

    },
    SaveText: {
        color: "white",
        fontSize: 18,
        textAlign: "center"

    },
    chooselocationText: {
        color: '#FFFFFF52',
        fontSize: 15
    },
    checkBoxView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: DeviceWidth / 5
    }
})