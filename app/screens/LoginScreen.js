


import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Constants from "expo-constants";
import CustomButton from "./../components/shared/CustomButton";
import ErrorMessage from "./../components/forms/ErrorMessage";
import CustomTextInput from "./../components/shared/CustomTextInput";
import Screen from "./../components/shared/Screen";
import { customToast, loadingToast, successToast } from "./../utils/toasts";
import { useDispatch } from "react-redux";
import { loginUser } from "../api/users";
import Toast from "react-native-tiny-toast";
import { StackActions } from "@react-navigation/native";
import Icon from "../components/shared/Icon";


//! DRY -> Don't Repeat Yourself
const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required("این فیلد الزامی می باشد")
        .email("ایمیل معتبر نمی باشد"),
    password: Yup.string()
        .required("این فیلد الزامی می باشد")
        .min(4, "کلمه عبور نباید کمتر از 4 کاراکتر باشد"),
});


const LoginScreen = ({ navigation, route }) => {
    const handleUserLogin = async (user) => {
        try {
            loadingToast("در حال برقراری ارتباط ...");
            const status = await loginUser(user);
            if (status === 200) {
                Toast.hide();
                successToast("ورود موفقیت آمیز بود");

                navigation.reset({
                    index: 0,
                    routes: [{ name: "Home" }],
                });
            } else {
                Toast.hide();
                customToast("ایمیل کاربری یا کلمه عبور صحیح نمی باشد");
            }
        } catch (err) {
            Toast.hide();
            console.log(err);
        }
    };
    return (
        <Screen style={styles.container}>
            <View style={styles.kk}>


                <Image style={styles.logo} resizeMode="cover" source={require("../assets/logo.png")} />


                <TouchableOpacity style={{ marginLeft: 5, marginTop: 40 }} onPress={() =>

                    navigation.dispatch(StackActions.replace("Home"))
                }  >

                    <Icon name="home" backgroundColor="lightblue" style={{ marginBottom: 60 }} />
                </TouchableOpacity>
            </View>

            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => handleUserLogin(values)}
                validationSchema={validationSchema}
            >
                {({
                    handleChange,
                    handleSubmit,
                    errors,
                    setFieldTouched,
                    touched,
                }) => (
                    <>
                        <CustomTextInput
                            placeholder="ایمیل کاربری"
                            autoCompleteType="email"
                            autoCorrect={false}
                            keyboardType="email-address"
                            icon="email"
                            placeholderTextColor="royalblue"
                            onChangeText={handleChange("email")}
                            onBlur={() => setFieldTouched("email")}
                        />
                        <ErrorMessage
                            error={errors.email}
                            visible={touched.email}
                        />
                        <CustomTextInput
                            placeholder="کلمه عبور"
                            autoCompleteType="password"
                            autoCorrect={false}
                            icon="onepassword"
                            placeholderTextColor="royalblue"
                            secureTextEntry
                            onChangeText={handleChange("password")}
                            onBlur={() => setFieldTouched("password")}
                        />
                        <ErrorMessage
                            error={errors.password}
                            visible={touched.password}
                        />
                        <View style={{ width: "60%" }}>
                            <CustomButton
                                title="ورود کاربر"
                                onPress={handleSubmit}
                            />
                        </View>
                    </>
                )}
            </Formik>

        </Screen>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    kk: {
        flexDirection: 'row',
        justifyContent: "flex-end",
        paddingLeft: 10,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10

    },
    container: {
        alignItems: "center",

    },
    logo: {
        width: 300,
        height: 150,
        marginTop: 20,
        // marginBottom: 10,
        borderRadius: 120,

    },
    icon: {
        marginLeft: 10,
        alignSelf: "center",
    }
});

