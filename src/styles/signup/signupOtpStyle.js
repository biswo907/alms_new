import { StyleSheet } from "react-native"
import { color } from "../globalStyle"
import { responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize, responsiveWidth, responsiveHeight, responsiveFontSize } from "react-native-responsive-dimensions";



export const signupOtpStyle = StyleSheet.create({


    heading: {
        fontSize: responsiveScreenFontSize(3),
        color: "white",
        fontWeight: '600'
    },
    descripction: {
        color: "#FFFFFFA3",
        fontSize: responsiveScreenFontSize(1.8),
        fontWeight: "400",
        padding: responsiveScreenWidth(2)
    },
    otpView: {
        display: "flex",
        flexDirection: "row",
        width: responsiveScreenWidth(80),
        marginLeft: responsiveScreenWidth(2),
        justifyContent: "center",
    },
    otpField: {
        backgroundColor: color.TextInputBox,
        fontSize: responsiveScreenFontSize(2.2),
        height: responsiveScreenWidth(14),
        width: responsiveScreenWidth(14),
        borderRadius: responsiveScreenWidth(1.5),
        textAlign: "center",
        color: color.textColor5,
        marginHorizontal: responsiveScreenWidth(3)



    },
    resendOTP: {
        color: color.textColor5,
        width: responsiveScreenWidth(65),
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: responsiveScreenHeight(5),
    },

    backLogin: {
        marginVertical: responsiveScreenHeight(6)
    },
    backLoginText: {
        color: color.textColor7,
        paddingHorizontal: responsiveScreenWidth(2),
        fontSize: responsiveScreenFontSize(1.6)
    }
})