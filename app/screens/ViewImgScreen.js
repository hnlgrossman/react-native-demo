import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import colors from '../config/colors';

function ViewImgScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.btnsCon}>
                {/* <View style={[styles.btn, styles.closeIcon]}></View>
                <View style={[styles.btn, styles.deleteIcon]}></View> */}
                <MaterialCommunityIcons name="close" size={32} color="#fff" />
                <MaterialCommunityIcons name="trash-can-outline" size={32} color="#fff" />
            </View>
            <Image resizeMode="contain" style={styles.img} source={require('../assets/chair.jpg')}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    img: {
        width: '100%',
        height: '100%',
    },
    btnsCon: {
        position: 'absolute',
        top: 40,
        flexDirection: 'row',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        width: '100%'
    },
    btn: {
        width: 50,
        height: 50,
    },
    closeIcon: {
        backgroundColor: colors.color1,
    },
    deleteIcon: {
        backgroundColor: colors.color2,
    },
})

export default ViewImgScreen;