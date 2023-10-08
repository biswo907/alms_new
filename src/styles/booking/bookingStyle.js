import { StyleSheet } from "react-native";
import { DeviceHeight } from "../../constants/Dimenssion";

export const bookingStyle = StyleSheet.create({
    safeareaView: {
        backgroundColor: '#19191C', minHeight: DeviceHeight + 50
    },
    bookingRequest: {
        color: "white", margin: "5%"
    },
    taskView: {
        height: "100%", width: '94%', marginLeft: '3%', backgroundColor: "transparent"
    },
    taskText: {
        color: "#6B7280", fontSize: 20, alignItems: "center", textAlign: "center", marginVertical: "60%"
    },
})

export const taskCardStyle = StyleSheet.create({
    taskCardMainView: {
        backgroundColor: "#27292D", width: '94%', marginLeft: '3%', borderRadius: 12, marginTop: 10
    },
    taskCardView: {
        width: '92%', marginLeft: '4%', marginTop: '3%', marginBottom: 10
    },
    categoryName: {
        color: 'white', fontSize: 18
    },
    timeOverView: {
        justifyContent: "flex-end", flexDirection: 'row', marginRight: '2%'
    },
    timeOverText: {
        color: 'white', fontSize: 16, fontWeight: "500"
    },
    userNameView: {
        flexDirection: "row", padding: 5
    }, userNameText: {
        color: "#FFFFFFA3", marginLeft: 8
    },
    detailsView: {
        borderWidth: 0.5, marginVertical: 15, marginLeft: 6, padding: 3, borderColor: 'white', width: 80, borderRadius: 7
    },
    detailsText: {
        color: '#FFFFFFA3', textAlign: 'center', padding: 5, fontSize: 17
    },
    itemView: {
        flexDirection: "row", padding: 5
    },
    itemText: {
        color: "#FFFFFFA3", marginLeft: 8
    },
    length: {
        color: "#FFFFFFA3", fontSize: 18, marginHorizontal: "5%", fontWeight: "500", marginVertical: "2%"
    },
    booking_DetailsView: {
        borderWidth: 0.5, marginVertical: 15, marginLeft: 6, padding: 3, borderColor: 'white', width: 80, borderRadius: 7
    },
    booking_DetailsText: {
        color: '#FFFFFFA3', textAlign: 'center', padding: 5, fontSize: 17
    },
    photographRequest_View: {
        height: "100%", width: '94%', marginLeft: '3%', backgroundColor: "transparent"
    },
    photographRequest_Text: {
        color: "#6B7280", fontSize: 20, alignItems: "center", textAlign: "center", marginVertical: "60%"
    }
})