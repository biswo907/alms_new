import { StyleSheet } from "react-native";
import { DeviceHeight, DeviceWidth } from "../../constants/Dimenssion";
import { color } from "../globalStyle";

export const profileStyle = StyleSheet.create({
    // Gallery File
    galleryView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    galleryText: {
        color: color.textColor5,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: "center",
        left: -5,
        margin: 5
    },
    galleryImageStyle: {
        height: DeviceWidth / 3.4,
        width: DeviceWidth / 3.4,
        borderRadius: 10,
    },
    EquipmentImageView: {
        width: DeviceWidth,
        flexDirection: 'row',
        padding: 10,
        margin: 3,
        marginVertical: 10,
        left: -18
    },
    EquipmentImage: {
        height: 80,
        width: 80,
        borderRadius: 7
    },
    EquipmentTextView: {
        width: DeviceWidth / 1.4,
        marginLeft: "3%",
    },
    EquipmentText1: {
        color: color.textColor5,
        fontSize: 17,
        fontWeight: 'bold'
    },
    EquipmentText2: {
        color: color.textColor4,
        fontWeight: '400'
    },

    // Profile Index File


    profileContent: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        marginVertical: 20,

    },
    personview: {
        marginLeft: 20,

    },
    persontext: {
        fontSize: 19,
        color: color.textColor5,
    },
    about: {
        color: color.textColor6,
        fontSize: 15
    },
    photographer: {
        fontSize: 15,
        color: color.textColor4,
    },

    galleryview: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#141417',
        top: -20


    },
    unSelectGallerybtn: {
        backgroundColor: 'black',
        padding: 14,
        width: '44%',
        borderRadius: 30,
        marginTop: 15,
        marginBottom: 15,
    },
    selectedGallerybtn: {
        backgroundColor: '#1D4ED466',
        padding: 14,
        width: '44%',
        borderRadius: 30,
        marginTop: 15,
        marginBottom: 15,
    },
    gallerytext: {
        color: color.textColor5,
        fontSize: 19,
        textAlign: 'center',
    },
    imageLoader: {
        height: DeviceWidth / 6,
        width: DeviceWidth / 6,
        borderRadius: 50
    },
    nameLoader: {
        height: 20,
        width: DeviceWidth / 3,
        margin: 5,
        borderRadius: 4
    },
    galleryLoader: {
        height: DeviceWidth / 3.4,
        width: DeviceWidth / 3.4,
        borderRadius: 10,
        margin: '1%'
    }



})