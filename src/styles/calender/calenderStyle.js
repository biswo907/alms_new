import { StyleSheet } from "react-native";
import { DeviceWidth } from "../../constants/Dimenssion";

export const calenderStyle = StyleSheet.create({

    headerview: {
        flexDirection: 'row',
        width: DeviceWidth,
        paddingVertical: 20,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        backgroundColor: "black",

    },
    headertext: {
        color: "white",
        fontSize: 22,
        fontWeight: "500"
    },
    savebtn: {
        borderRadius: 10,
        backgroundColor: '#1D4ED8',
        textAlign: "center",
        fontWeight: "500",
        padding: 11,
        left: -5
    },
    savebtnText: {
        color: 'white',
        fontSize: 16,
        textAlign: "center",
        fontWeight: "500",
    },
    disableSavebtn: {
        color: 'white',
        fontSize: 16,
        padding: 11,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 15,
        backgroundColor: 'grey',
        textAlign: "center",
        fontWeight: "500",
        top: -5,
        left: -5
        // marginRight: -75,
    },
    notification: {
        borderWidth: 0.3,
        borderColor: 'gray',
        padding: 5,
        paddingTop: 10,
        paddingLeft: 7,
        borderRadius: 6,
        bottom: 3
    },
    bookingDetailsView: {
        marginVertical: 34

    },
    bookingDetailsText: {
        color: 'white',
        paddingVertical: 10,
        fontSize: 17,
        fontWeight: "500"
    },
    calenderTheme: {
        calendarBackground: '#19191C',
        textSectionTitleColor: 'white',
        // selectedDayBackgroundColor: '#acac44',
        selectedDayTextColor: 'black',
        // selectedDayBackgroundColor: 'yellow',
        // selectedDayTextColor: 'black',
        // todayTextColor: '#00adf5',
        dayTextColor: 'white',
        monthTextColor: 'white',
        arrowColor: 'white',
        textMonthFontWeight: 'bold',
        textDayFontWeight: 'bold',
        textDisabledColor: '#FFFFFF52'

    },

    dayDetails: {
        marginTop: 5, flexDirection: "row", justifyContent: 'space-between', padding: 10
    },
    dayView: {
        flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5
    }, dayText: {
        color: 'white', fontWeight: '400', marginLeft: 10
    },
    dateTextLeft: {
        color: '#FFFFFF99', fontWeight: '600'
    },
    dateTextRight: {
        color: '#FFFFFF', fontWeight: '600'
    },
    dateView: {
        flexDirection: 'row', justifyContent: "space-between", marginVertical: 5
    }
})



export const breakCalenderStyle = StyleSheet.create({
    dropdown: {
        width: "100%",
        backgroundColor: "transparent",
        borderWidth: 0.5,
        borderRadius: 10,
        backgroundColor: '#27292D',
        borderColor: 'black',
        height: 60
    },
    dropdownBtn: {
        width: "70%",
        textAlign: "left",
        color: "white",
        fontWeight: "400",

    },
    headerview: {
        display: 'flex',
        backgroundColor: "black",
        flexDirection: 'row',
        // padding: 20,
        paddingVertical: 20,
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        // backgroundColor: 'green'

    },
    headertext: {
        color: "white",
        fontSize: 22,
        minWidth: "50%",
        fontWeight: "500",
        // backgroundColor: 'red',
        marginLeft: '-7%'
    },
    savebtn: {
        color: 'white',
        fontSize: 16,
        padding: 11,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 15,
        backgroundColor: '#1D4ED8',
        textAlign: "center",
        // marginRight: -75,
        fontWeight: "500",
        // lineHeight: 24,
        top: -5,
        left: -5
    },
    disableSavebtn: {
        color: 'white',
        fontSize: 16,
        padding: 11,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 15,
        backgroundColor: 'grey',
        textAlign: "center",
        fontWeight: "500",
        top: -5,
        left: -5
        // marginRight: -75,
    },
    notification: {
        borderWidth: 0.3,
        borderColor: 'gray',
        padding: 5,
        paddingTop: 10,
        paddingLeft: 7,
        borderRadius: 6,
        bottom: 3
    },
    SaveBtn: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 15,
        marginTop: 34,
        paddingLeft: 20,
        padding: 15,
        backgroundColor: "#1E40AF",
        // width: "90%",
        // marginLeft: "5%",
        marginBottom: 21

    },
    CancleBtn: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 15,
        marginTop: 34,
        paddingLeft: 20,
        padding: 15,
        backgroundColor: "red",
        marginBottom: 21,
        width: '45%'

    },
    SaveText: {
        color: "white",
        fontSize: 18,
        textAlign: "center"

    },
    BreakHourText: {
        color: 'white', margin: 4
    },
    deleteicon: {
        marginTop: 43,
        // marginLeft: 12,
        // marginBottom: 15,
        // paddingLeft: 13,
        width: "8%"

    }, breakHourFromTimeView: {
        flexDirection: "row", gap: 15
    },
    calenderTheme: {
        calendarBackground: '#19191C',
        textSectionTitleColor: '#00adf5',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: 'black',
        todayBackgroundColor: '#7fdbff',
        dayTextColor: 'white',
        monthTextColor: 'white',
        arrowColor: 'white',
        textMonthFontWeight: 'bold',
        textDayFontWeight: 'bold',
        textDisabledColor: '#FFFFFF52'

    },
    redBorder: {
        borderWidth: 1, borderColor: "red"
    }
})