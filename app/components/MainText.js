import React from 'react';
import { StyleSheet, Text } from 'react-native';

function MainText({children, style, color}) {
    const styles = StyleSheet.create({
        text: {
            // Define your default text styles here
            fontSize: 16,
            color: color ? color : 'black',
            // textAlign: ''
        }
    })
    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
}


export default MainText;