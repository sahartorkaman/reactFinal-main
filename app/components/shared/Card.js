// import React from "react";

// import { View, StyleSheet, Image, ScrollView, } from "react-native";
// import { numberWithCommas } from "../../utils/price";
// import CustomText from "./CustomText";

// const Card = ({ title, price, teacher, time, image, Info = null, stylee = 1 }) => {

//     return (
//         <View style={(stylee == 0) ? styles.cardHorizontal : styles.card} >
//             <Image

//                 fadeDuration={200}

//                 resizeMode="contain"
//                 source={{
//                     uri: `https://rnapi.ghorbany.dev/${image}`,
//                 }}
//                 // style={styles.courseImage}
//                 style={(stylee == 0) ? styles.courseImageCard : styles.courseImage}
//             />
//             <View style={{ padding: 20 }}>
//                 <CustomText fontFamily="yekan" size="1"

//                     style={(stylee == 0) ? styles.titleCard : styles.title}
//                 >
//                     {title}
//                 </CustomText>
//                 <View style={(stylee == 0) ? styles.courseDetailsCard : styles.courseDetails}  >
//                     <CustomText style={(stylee == 0) ? styles.costCard : styles.cos} t >

//                         قیمت دوره :
//                         {price === 0
//                             ? " رایگان"
//                             : ` ${numberWithCommas(price)} تومان`}
//                     </CustomText>

//                     <CustomText style={(stylee == 0) ? styles.TimeCard : styles.Time}>
//                         زمان دوره : {time}
//                     </CustomText>
//                 </View>
//                 <View
//                     style={(stylee == 0) ? styles.userContainerCard : styles.userContainer}
//                 >
//                     <CustomText


//                         style={(stylee == 0) ? styles.teacherCard : styles.teacher}
//                     >
//                         مدرس دوره : {teacher}
//                     </CustomText>
//                 </View>
//             </View>
//             {
//                 Info ? (
//                     <View style={{ flex: 1 }}>
//                         <CustomText style={(stylee == 0) ? styles.desCard : styles.des} >
//                             توضیحات دوره :
//                         </CustomText>
//                         <ScrollView>
//                             <CustomText


//                                 style={(stylee == 0) ? styles.courseInformationCard : styles.courseInformation}
//                             >
//                                 {Info}
//                             </CustomText>
//                         </ScrollView>
//                     </View>
//                 ) : null
//             }
//         </View >
//     );
// };

// export default Card;

// const styles = StyleSheet.create({

//     cost:
//     {
//         fontFamily: "yekan", size: "1"
//     },
//     costCard:
//     {
//         fontFamily: "yekan", size: "0.5"
//     },
//     des:
//     {
//         fontFamily: "yekan", size: "3"
//     },
//     desCard: {
//         fontFamily: "yekan", size: "2.5"
//     },
//     Time:
//     {
//         fontFamily: "yekan", size: "1"
//     },
//     TimeCard:
//     {
//         fontFamily: "yekan", size: "0.5"
//     },
//     cardHorizontal: {
//         marginTop: 5,
//         padding: 10,

//         //  backgroundColor: "teal",

//         // color: "white",
//         marginHorizontal: 10,
//         //  height: 300,
//         color: "black",
//         borderRadius: 15,
//         backgroundColor: "#c0c5e9",
//         marginBottom: 20,
//     },
//     card: {
//         // flex: 1,
//         borderRadius: 15,
//         backgroundColor: "white",
//         marginBottom: 20,

//     },

//     courseImage: {
//         textAlign: 'center',
//         marginTop: 10,
//         width: "100%",
//         height: 200,
//     },
//     courseImageCard: {
//         textAlign: 'center',
//         marginTop: 10,
//         width: "100%",
//         height: 100,
//     },
//     courseDetails: {
//         flexDirection: "row",
//         justifyContent: "space-between",
//     },
//     courseDetailsCard: {
//         flexDirection: "column",
//         justifyContent: "space-between",
//     },
//     container: {
//         flexDirection: "row",
//         marginVertical: 20,
//         padding: 15,
//     },
//     containerCard: {
//         flexDirection: "column",

//         marginHorizontal: 20,
//         padding: 15,
//     },
//     courseInformation: {
//         textAlign: "justify",
//         marginVertical: 10,
//         lineHeight: 25,
//         fontFamily: "ih",
//         size: "2"
//     },
//     courseInformationCard: {
//         textAlign: "justify",
//         marginHorizontal: 10,
//         lineHeight: 25,
//         fontFamily: "ih",
//         size: "1.7"
//     },
//     screen: {
//         backgroundColor: "#f8f4f4",
//     },
//     userContainer: {
//         marginVertical: 10,
//     },
//     userContainerCard: {
//         marginHorizontal: 10,
//     },
//     title: {
//         marginBottom: 7,
//         alignSelf: "center",
//     },
//     titleCard: {
//         marginBottom: 7,
//         alignSelf: "center",
//     },
//     teacher: {
//         alignSelf: "center",
//         fontFamily: "ih",
//         size: "2"
//     },
//     teacherCard: {
//         alignSelf: "center",
//         fontFamily: "ih",
//         size: "1.5"
//     },
// });

import React from "react";

import { View, StyleSheet, Image, ScrollView, } from "react-native";
import { numberWithCommas } from "../../utils/price";
import CustomText from "./CustomText";

const Card = ({ title, price, teacher, time, image, Info = null, stylee = 1 }) => {

    return (
        <View style={(stylee == 0) ? styles.cardHorizontal : styles.card} >
            <Image

                fadeDuration={200}

                resizeMode="contain"
                source={{
                    uri: `https://rnapi.ghorbany.dev/${image}`,
                }}
                //  style={styles.courseImage}
                style={(stylee == 0) ? styles.courseImageH : styles.courseImage}
            />
            <View style={{ padding: 20 }}>
                <CustomText fontFamily="yekan" size="2" styles={styles.title}>
                    {title}
                </CustomText>
                <View style={styles.courseDetails}>
                    <CustomText fontFamily="yekan" size="1.5">
                        قیمت دوره :
                        {price === 0
                            ? " رایگان"
                            : ` ${numberWithCommas(price)} تومان`}
                    </CustomText>
                    <CustomText fontFamily="yekan" size="1.5">
                        زمان دوره : {time}
                    </CustomText>
                </View>
                <View style={styles.userContainer}>
                    <CustomText
                        fontFamily="ih"
                        size="1.5"
                        styles={styles.teacher}
                    >
                        مدرس دوره : {teacher}
                    </CustomText>
                </View>
            </View>
            {Info ? (
                <View style={{ flex: 1 }}>
                    <CustomText fontFamily="yekan" size="2.5">
                        توضیحات دوره :
                    </CustomText>
                    <ScrollView>
                        <CustomText
                            fontFamily="ih"
                            size="1.7"
                            styles={styles.courseInformation}
                        >
                            {Info}
                        </CustomText>
                    </ScrollView>
                </View>
            ) : null}
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    cardHorizontal: {
        marginTop: 5,
        padding: 10,

        marginHorizontal: 10,

        color: "black",
        borderRadius: 15,
        backgroundColor: "white",
        marginBottom: 20,
    },
    card: {
        // flex: 1,
        borderRadius: 15,
        backgroundColor: "white",
        marginBottom: 20,

    },

    courseImage: {
        textAlign: 'center',
        marginTop: 10,
        width: "100%",
        height: 200,
    },
    courseImageH:
    {
        textAlign: 'center',
        marginTop: 10,
        width: "100%",
        height: 100,
    },
    courseDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    container: {
        flexDirection: "row",
        marginVertical: 20,
        padding: 15,
    },
    courseInformation: {
        textAlign: "justify",
        marginVertical: 10,
        lineHeight: 25,
    },
    screen: {
        backgroundColor: "#f8f4f4",
    },
    userContainer: {
        marginVertical: 10,
    },
    title: {
        marginBottom: 7,
        alignSelf: "center",
    },
    teacher: {
        alignSelf: "center",
    },
});
