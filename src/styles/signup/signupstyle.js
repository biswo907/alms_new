import { StyleSheet } from "react-native";
import { DeviceHeight } from "../../constants/Dimenssion";
import { color } from "../globalStyle";
import { responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize, responsiveWidth, responsiveHeight } from "react-native-responsive-dimensions";


export const signupstyle = StyleSheet.create({
    new_account: {
        fontSize: responsiveScreenFontSize(3),
        color: "white",
        fontWeight: '600'
    },
    new_account_descripction: {
        color: "#FFFFFFA3",
        fontSize: responsiveScreenFontSize(1.8),
        fontWeight: "400",
        padding: responsiveScreenWidth(2)
    },
    GoogleTxt: {
        padding: responsiveWidth(2.8),
        color: "#FFFFFF",
    },
    img: {
        width: 40,
        height: 40,
        borderRadius: 100
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


    checkBox: {
        borderWidth: 1,
        backgroundColor: "white",
        borderColor: "white"
    },


    buttonView: {
        flexDirection: 'row',
        gap: responsiveScreenWidth(2),
        alignItems: 'center',
        padding: responsiveScreenWidth(8)
    },
    errorText: {
        color: color.textColor3,
        fontSize: responsiveScreenFontSize(2),
        width: responsiveScreenWidth(90),
        marginTop: responsiveScreenWidth(1.2)
    },
    text_left: {
        textAlign: "center",
        color: "gray"
    },
    login_here: {
        color: "white",
        fontSize: responsiveScreenFontSize(2),
        fontWeight: 'bold'

    },
    agree: {
        color: 'white'
    },
    tnc: {
        color: '#2FA3FF',
        fontWeight: '600',
    },



    termandCondiction: {
        display: "flex",
        flexDirection: "row",
        width: responsiveScreenWidth(90),
        marginLeft: responsiveScreenWidth(5),
        gap: responsiveScreenWidth(2.5),
        marginBottom: responsiveScreenHeight(3)
    }
})

export const signupModalStyle = StyleSheet.create({
    maincontainer: {
        backgroundColor: color.modalBackGround,
        top: "13%",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        height: DeviceHeight
    },
    container: {
        width: '90%',
        marginLeft: '5%'
    },
    headerText: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginVertical: 20
    },
    modalText: {
        marginTop: 29,
        color: color.textColor2,
        fontWeight: '400',
        lineHeight: 25,
        fontSize: 16
    }
})