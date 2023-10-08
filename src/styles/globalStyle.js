import { StyleSheet, StatusBar } from "react-native";
import { DeviceWidth, DeviceHeight } from '../constants/Dimenssion'
import { responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize, responsiveWidth } from "react-native-responsive-dimensions";

export const color = {
    backGroundColor1: '#19191C',
    modalBackGround: '#242327',
    backGroundColor2: 'black',
    TextInputBox: '#27292d',  //Light Black
    buttonColor: '#1E40AF',  //Light Blue
    textColor1: '#FFFFFF52', //Light Gray  
    textColor2: 'white', //White
    textColor3: 'red', //red  //Error Text
    textColor4: "#FFFFFFA3", //Light Light Gray  //PlaceHolder Text Color
    textColor5: "#FFFFFF", //Text Input color    Same As Color 2
    textColor6: "#ffffff64", //Text Input color  //PlaceHolder Text Color 
    textColor7: "#2FA3FF", //Resend Otp Text color //Blue  
    textColor8: "#010201", //Header BackGround Color //Black  
    textColor9: "green", //Verified Text  
    textColor10: "#202124", //Preference Text BackGround Color  

}


export const GlobalStyle = StyleSheet.create({

    MainBody: {
        width: DeviceWidth,
        minHeight: DeviceHeight + 45,
        backgroundColor: color.backGroundColor1
    },
    Body: {
        width: '94%',
        marginLeft: '3%',
        marginBottom: '10%'
    },
    TextInputBox: {
        backgroundColor: color.TextInputBox,
        color: color.textColor5,
        borderRadius: 8,
        paddingLeft: 20,
        padding: 15,
        // fontSize: 20
    },
    Button: {
        borderRadius: 15,
        padding: 15,
        backgroundColor: color.buttonColor,
        marginTop: 42

    },
    ButtonText: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        fontWeight: 'bold'
    },
    GoogleView: {
        marginTop: "8%",
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "#27292d",
        padding: 8,
        borderRadius: 10
    },


})


export const responsive = StyleSheet.create({

    container: {
        height: DeviceHeight,
        width: DeviceWidth,
        backgroundColor: '#19191c'
    },

    body: {

    },

    google: {
        marginTop: responsiveScreenHeight(3),
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "#27292d",
        padding: responsiveScreenWidth(2),
        borderRadius: responsiveScreenWidth(2.5),
        width: responsiveScreenWidth(90)
    },
    textBox: {
        backgroundColor: color.TextInputBox,
        color: color.textColor5,
        borderRadius: responsiveScreenWidth(2.5),
        paddingLeft: 20,
        padding: responsiveScreenWidth(3.5),
        width: responsiveScreenWidth(90),

    },
    button: {
        borderRadius: responsiveScreenWidth(2.5),
        padding: responsiveScreenWidth(3.5),
        backgroundColor: color.buttonColor,
        width: responsiveScreenWidth(90)
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        textAlign: "center",
        fontWeight: 'bold'
    },
    header: {
        backgroundColor: color.textColor8,
        flexDirection: 'row',
        padding: responsiveScreenWidth(4),
        alignItems: 'center',
        gap: responsiveScreenWidth(1.5)
    }

})