import { StyleSheet } from "react-native";
import { DeviceHeight, DeviceWidth } from "../../constants/Dimenssion";

export const profileGalleryDetailsStyle = StyleSheet.create({
    HeaderView: {
        display: 'flex',
        backgroundColor: "black",
        flexDirection: 'row',
        padding: 25,
    },
    HeaderText: {
        color: "white",
        fontSize: 25,
    },
    ImageView: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    image: {
        height: DeviceHeight / 3.5,
        width: DeviceWidth / 1.05,
        marginVertical: 8,
        borderRadius: 10
    }
})