import React from 'react';
import { View, Text, Easing, Animated } from 'react-native';
import { StackNavigator, DrawerNavigator, SwitchNavigator, TabNavigator } from 'react-navigation'
import MainPage from './MainPage'
// import ScanQR from './ScanQR'
// import SplashScreen from './SplashScreen'

console.disableYellowBox = true
const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 750,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps

            const thisSceneIndex = scene.index
            const width = layout.initWidth

            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0],
            })

            return { transform: [{ translateX }] }
        },
    }
}

export default Navi = StackNavigator({
   
    // SplashScreen: {
    //     screen: SplashScreen
    // },
    MainPage: {
        screen: MainPage
    },
    // ScanQR: {
    //     screen: ScanQR
    // },
   




},
    {
        navigationOptions: { header: null },
        // transitionConfig
    },
)

