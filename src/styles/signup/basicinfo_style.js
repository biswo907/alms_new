import { StyleSheet } from "react-native";
import { DeviceHeight } from "../../constants/Dimenssion";
import { color } from "../globalStyle";
import { responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize, responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions";


export const basicinfo_style = StyleSheet.create({


    basicinfoView: {
        color: color.textColor2,
        fontSize: responsiveScreenFontSize(3.2),
        fontWeight: "400",
        marginBottom: responsiveScreenHeight(3)

    },
    verifiedtext: {
        color: 'green',
        fontSize: responsiveScreenFontSize(1.7),

    },
    phoneVerifyView: {
        flexDirection: 'row',
        width: responsiveScreenWidth(30),
        marginLeft: responsiveScreenWidth(55),
        // top: responsiveHeight(2.8),
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        position: "absolute"
    },

    StudioVerifiedText: {
        fontSize: responsiveScreenFontSize(1.7),
        textAlign: "right",
    },


})

export const basicinfo_FormGroup = StyleSheet.create({
    // FormGroup Style
    formGroupLabel: {
        color: color.textColor4
    },

    inputContainer: {
        backgroundColor: "#27292d",
        color: "#FFFFFF",
        borderRadius: responsiveScreenWidth(2),
        marginTop: responsiveScreenHeight(0.5),
        padding: responsiveScreenWidth(3),
        width: responsiveScreenWidth(90)
    },
    formGroupText: {
        color: color.textColor5,
        fontWeight: '500'
    },

})

export const BasicinfoModalStyle = StyleSheet.create({
    mainModalView: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        height: DeviceHeight,

    },
    otpPageView: {
        backgroundColor: color.backGroundColor1,
        height: DeviceHeight,
        width: "94%",
        marginLeft: '3%',
        marginTop: '60%',
        borderRadius: 15
    },
    Loginview: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "90%",
        marginLeft: '5%',
        paddingVertical: 15
    },

    LoginTxt: {
        textAlign: "center",
        fontSize: 24,
        color: color.textColor5,
    },

    inputMob: {
        backgroundColor: color.TextInputBox,
        color: color.textColor6,
        borderRadius: 8,
        padding: 15,
        fontSize: 19,
        fontWeight: "500",
        marginTop: '30%'
    },
    ButtonField: {
        width: "90%",
        marginLeft: "5%",

    },
    inputView: {
        display: "flex",
        flexDirection: "row",
        width: "90%",
        marginLeft: "5%",
        marginTop: "8%",
        justifyContent: "center"
    },
    inputField: {
        backgroundColor: color.TextInputBox,
        padding: 3,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 19,
        height: 56,
        width: 65,
        textAlign: "center",
        borderRadius: 10,
        color: "white",
    },
    errorText: {
        color: color.textColor3,
        marginLeft: "10%",
        top: '2%'
    },
    resendOTP: {
        width: "80%",
        marginLeft: "10%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 32
    },
    ButtonView: {
        width: "90%",
        marginLeft: "5%",
        marginTop: "10%"
    }




})