import { StyleSheet } from "react-native";
import { DeviceHeight, DeviceWidth } from "../../constants/Dimenssion";


export const galleryContainerHeader = StyleSheet.create({
    mainView: {
        backgroundColor: "black",
        flexDirection: 'row',
        paddingTop: '5%',
        paddingBottom: '5%',
        justifyContent: 'space-between',
    },
    flex_Row: {
        flexDirection: "row"
    },
    headingText: {
        color: "white",
        fontSize: 25,
        marginLeft: DeviceWidth / 50,
    },
    UploadBtn: {
        padding: 5, borderRadius: 10, backgroundColor: '#1D4ED8', left: -10, justifyContent: 'center'
    },
    UploadBtnText: {
        color: 'white',
        fontSize: 18,

    },
    NotificationIcon: {
        borderWidth: 0.3,
        borderColor: 'gray',
        padding: 5,
        borderRadius: 6,
        marginLeft: DeviceWidth / 25,
        marginRight: DeviceWidth / 50
    },
    ThreeDot: {
        padding: 5
    }
})

export const galleryContainer = StyleSheet.create({
    selectedPageView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: 'flex',
        marginBottom: 160
        // minHeight: DeviceHeight / 4 + 6
    },
    selectedImageView: {
        borderWidth: 3,
        borderColor: 'white',
        height: DeviceHeight / 5,
        width: DeviceWidth / 3.4,
        margin: "1%",
        borderRadius: 5,
    },
    selectedImage: {
        height: "83%",
        width: "95%",
        margin: "1%",
        borderRadius: 5
    },
    selectedCheckBox: {
        marginLeft: '5%',
        marginTop: '2%'
    },

    // Unselected Page Bady

    unselectPageView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        display: 'flex',
        marginBottom: 160,
    },
    unSelectImageView: {
        height: DeviceHeight / 5,
        width: DeviceWidth / 3.4,
        margin: "1%",
    },
    unSelectImage: {
        height: "100%",
        width: "100%",
        margin: "1%",
        borderRadius: 5
    },

    //  Confirmation Modal Style For Delete Image 

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: DeviceHeight
    },
    deleteModalView: {
        backgroundColor: 'black',
        borderTopRightRadius: 19,
        borderTopLeftRadius: 19,
        position: 'absolute',
        bottom: 0,
        width: DeviceWidth

    },
    deleteText: {
        color: 'white', textAlign: 'center', fontSize: 16, marginVertical: 10
    },
    warnText: {
        color: 'white', textAlign: 'center', fontSize: 16
    },
    buttonContainer: {
        flexDirection: 'row', justifyContent: 'space-between', width: '80%', marginLeft: '10%', marginVertical: "7%"
    },
    buttonView: {

    },
    CancleBtn: {
        backgroundColor: '#DC2626', width: '40%', borderRadius: 100
    },
    ConfirmBtn: {
        backgroundColor: '#2563EB', width: '40%', borderRadius: 100
    },
    buttonText: {

    }
})