

import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import CustomButton from "./../components/shared/CustomButton";
import ErrorMessage from "./../components/forms/ErrorMessage";
import CustomTextInput from "./../components/shared/CustomTextInput";
import Screen from "./../components/shared/Screen";
import { customToast, loadingToast } from "./../utils/toasts";
import { StackActions } from "@react-navigation/native";
import Icon from "../components/shared/Icon";
import { registerUser } from "../api/users";
import Toast from "react-native-tiny-toast";

const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
    email: Yup.string()
        .required("این فیلد الزامی می باشد")
        .email("ایمیل معتبر نمی باشد"),
    password: Yup.string()
        .required("این فیلد الزامی می باشد")
        .min(4, "کلمه عبور نباید کمتر از 4 کاراکتر باشد"),
});



const RegisterScreen = ({ navigation }) => {
    const handleUserRegistration = async (user) => {
        try {
            loadingToast("ثبت نام کاربر...");
            const status = await registerUser(user);

            if (status === 201) {
                //navigation
                Toast.hide();
                navigation.navigate("Login", { successRegister: true });
            } else {
                //show error
                Toast.hide();
                customToast("خطایی رخ داده است");
            }
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <Screen style={styles.container}>

            <View style={styles.kk}>


                {/* <Image style={styles.logo} source={require("../assets/logo.png")} /> */}


                <TouchableOpacity onPress={() =>

                    navigation.dispatch(StackActions.replace("Home"))
                }  >

                    <Icon name="home" backgroundColor="lightblue" style={{ marginBottom: 60 }} />
                </TouchableOpacity>
            </View>
            <Formik
                initialValues={{ fullname: "", email: "", password: "" }}
                onSubmit={(values) => handleUserRegistration(values)}
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
                            placeholder="نام و نام خانوادگی"
                            autoCorrect={false}
                            icon="account-circle"
                            placeholderTextColor="royalblue"
                            onChangeText={handleChange("fullname")}
                            onBlur={() => setFieldTouched("fullname")}
                        />
                        <ErrorMessage
                            error={errors.fullname}
                            visible={touched.fullname}
                        />
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
                        <CustomTextInput
                            placeholder="تکرار کلمه عبور"
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
                                title="ثبت نام"
                                onPress={handleSubmit}
                            />
                        </View>
                    </>
                )}
            </Formik>
        </Screen>
    );
};

export default RegisterScreen;
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

