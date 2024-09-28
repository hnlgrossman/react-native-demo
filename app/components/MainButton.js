import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../config/colors';

function MainButton({children, backgroundColor, onPress}) {
    const styles = StyleSheet.create({
        btn: {
            backgroundColor: backgroundColor ? backgroundColor : colors.color1,
            width: '100%',
            height: 50,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center'
        }
    })


    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            {children}
        </TouchableOpacity>
    );
}


export default MainButton;