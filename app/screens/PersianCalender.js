import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import PersianCalendarPicker from 'react-native-persian-calendar-picker';
import moment from "jalali-moment";
// import Icon from "../components/shared/Icon";


const PersianCalendar = ({ navigation }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    // const { _id, title, price, imageUrl, info } = route.params.course;

    const handleDateChange = (date, dateType) => {

        let mydate = new Date(date);

        if (dateType === "START_DATE") {

            setStartDate(moment(new Date(date), "YYYY/MM/DD").locale('fa').format('YYYY/MM/DD'));

        } else if (dateType === "END_DATE") {

            setEndDate(moment(new Date(date), "YYYY/MM/DD").locale('fa').format('YYYY/MM/DD'));
            setEndDate((state) => {
                console.log(state);
                setTimeout(() => {

                    navigation.navigate("LocationDetailsScreen", {
                        StartDate: startDate,
                        EndDate: state,
                    })
                }, 2000);
                return state;
            });


        }



    }


    return (
        <View style={styles.container}>
            <PersianCalendarPicker
                isRtl={false}
                onDateChange={handleDateChange}
                allowRangeSelection
                selectedRangeStartStyle={{ borderBottomLeftRadius: 20, borderTopLeftRadius: 20 }}
                selectedRangeEndStyle={{ borderBottomRightRadius: 20, borderTopRightRadius: 20 }}
                selectedRangeStyle={{ backgroundColor: "#ce87f5" }}
                todayTextStyle={{ color: "rgba(250,250,250,0.7)" }}
                enableSwipe
                disableDate={[new Date()]}
            />
            <View style={styles.textContainer}>
                <Text>شروع بازه:{startDate}</Text>
                <Text>پایان بازه:{endDate}</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 10,
        padding: 5
    }
})
export default PersianCalendar;