import { StyleSheet } from "react-native";
import { color } from "../globalStyle";
import { responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize, responsiveWidth } from "react-native-responsive-dimensions";


export const loginstyles = StyleSheet.create({
    LoginTxt: {
        fontSize: responsiveScreenFontSize(3),
        color: "white",
        fontWeight: '600'
    },
    Logindesc: {
        color: "#FFFFFFA3",
        fontSize: responsiveScreenFontSize(1.8),
        padding: responsiveScreenWidth(2),
        fontWeight: "400",
    },
    GoogleTxt: {
        padding: 10,
        color: "#FFFFFF",
        fontSize: responsiveScreenFontSize(1.8)
    },
    GoogleView: {
        marginTop: responsiveScreenHeight(3),
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "#27292d",
        padding: responsiveScreenWidth(2),
        borderRadius: responsiveScreenWidth(2),
        width: responsiveScreenWidth(90)
    },
    or: {
        width: responsiveScreenWidth(90),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: responsiveScreenWidth(7)
    },
    left_line: {
        width: responsiveScreenWidth(40),
        backgroundColor: "#7B8794",
        height: responsiveScreenWidth(0.2)
    },
    right_line: {
        width: responsiveScreenWidth(40),
        backgroundColor: "#7B8794",
        height: responsiveScreenWidth(0.2)
    },

    TextInputBox: {
        backgroundColor: color.TextInputBox,
        color: color.textColor5,
        borderRadius: responsiveScreenWidth(1.5),
        paddingLeft: 20,
        padding: responsiveScreenWidth(3.5),
        width: responsiveScreenWidth(90),
        marginBottom: responsiveScreenWidth(5)
    },

    Button: {
        borderRadius: responsiveScreenWidth(1.6),
        padding: responsiveScreenWidth(3.5),
        backgroundColor: color.buttonColor,
        width: responsiveScreenWidth(90)

    },

    CreateAccountView: {
        flexDirection: 'row',
        gap: responsiveScreenWidth(2),
        alignItems: 'center',
        padding: responsiveScreenWidth(8)
    },
    errorText: {
        color: color.textColor3,
        fontSize: 16,
        width: responsiveScreenWidth(90),
        marginBottom: responsiveScreenWidth(3)
    },
    SignUpBtn: {
        textAlign: "center",
        color: "gray"
    },
    Create: {
        color: "white",
        fontSize: responsiveScreenFontSize(2),
        fontWeight: 'bold'
    }

})