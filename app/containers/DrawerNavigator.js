import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import TabNavigator from './TabsNavigator';
import { AccountScreen, LoginScreen, RegisterScreen } from '../screens';
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {

  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{ drawerPosition: 'left', headerShown: false }}   >
      <Drawer.Screen options={{

        tabBarLabel: 'صفحه اصلی',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="Home" color={color} size={26} />

        ),
      }} name="Home" component={TabNavigator} />
      <Drawer.Screen name="Login" options={{

        drawerLabel: 'ورود', drawerIcon: () => (
          <MaterialCommunityIcons name="login" color='#544e4e' size={26} />
        )
      }}
        component={LoginScreen} />
      <Drawer.Screen name="Register"
        options={{
          drawerLabel: 'ثبت نام', drawerIcon: () => (
            <MaterialIcons name="favorite" color='#544e4e' size={26} />
          )
        }}

        component={RegisterScreen} />
      <Drawer.Screen name="Account"
        options={{
          drawerLabel: 'پیشخوان', drawerIcon: () => (
            <MaterialCommunityIcons name="account-circle" color='#544e4e' size={26} />
          )
        }}
        component={AccountScreen} />
      {/* <Drawer.Screen name="Modal"

        component={ModalTester} />*/}
    </Drawer.Navigator>



  );
}
export default DrawerNavigator;

