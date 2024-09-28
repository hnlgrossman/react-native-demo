import React from 'react';
import { StyleSheet, ImageBackground, Text, View, Image } from 'react-native';


import colors from '../config/colors';
import MainText from '../components/MainText'
import MainButton from '../components/MainButton'

function WelcomeScreen(props) {
    return (
        <ImageBackground blurRadius={5} style={styles.background} 
        source={require('../assets/background.jpg')}>
            <View style={styles.imgTextCon}>
                <Image  style={styles.logo} source={require('../assets/logo-red.png')}></Image>
                {/* <Text></Text> */}
                <MainText style={styles.title}>Sell What You Don't Need</MainText>
            </View>
            
            <View style={styles.btnsCon}>
                <MainButton onPress={() => { }}>
                    <MainText style={{color:'#fff', fontWeight: 600}} >LOGIN</MainText>
                </MainButton>
                <MainButton backgroundColor={colors.color2}>
                    <MainText style={{color:'#fff', fontWeight: 600}}>SIGNUP</MainText>
                </MainButton>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.color1
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: colors.color2
    },
    imgTextCon: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
        gap: 10
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        fontWeight: '600',
        fontSize: 18
    },
    btnsCon: {
        gap: 20,
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 40
    }
})

export default WelcomeScreen;