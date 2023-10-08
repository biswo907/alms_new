import { StyleSheet } from "react-native";
import { DeviceHeight, DeviceWidth } from "../../constants/Dimenssion";
import { color } from "../globalStyle";



export const galleryHeaderStyle = StyleSheet.create({
    headerView: {
        backgroundColor: "#010201",
        flexDirection: 'row',
        width: DeviceWidth,
        justifyContent: 'space-between',
        padding: 17

    },
    view1: {
        flexDirection: 'row',
        left: -7
    },

    headingText: {
        color: "white",
        fontSize: 25,
    },
    addCategoryBtnView: {
        backgroundColor: "#1E40AF",
        color: color.textColor5,
        borderRadius: 10,
        left: -13
    },
    addCategoryBtnText: {
        color: "white",
        padding: 10,
        textAlign: "center",
    },
    notificationIcon: {
        borderWidth: 0.3,
        borderColor: 'gray',
        padding: 5,
        borderRadius: 6,
        left: 12
    }
})

export const galleryStyle = StyleSheet.create({
    topView: {
        marginTop: 20
    },
    topText: {
        color: color.textColor4

    },
    allimageView: {
        marginTop: 20,
        // marginBottom: DeviceHeight / 50
    },
    imageView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10
    },
    CategoryName: {
        color: 'white',
        fontSize: 20,
        marginRight: 10
    },
    iconView: {
        flexDirection: 'row',
        marginRight: -10
    },
    imageLine: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    mapView: {
        flexDirection: 'column', justifyContent: 'space-between'
    },
    uploadedImage: {
        width: DeviceWidth / 100 * 21,
        height: DeviceWidth / 100 * 21,
        backgroundColor: '#202124',
        margin: DeviceWidth / 100 * 0.5,
        borderRadius: 5,
        borderWidth: 0.2,
        borderColor: 'white',
    },
    icon: {
        textAlign: 'center',
        marginVertical: DeviceWidth / 100 * 6,
    }
})

