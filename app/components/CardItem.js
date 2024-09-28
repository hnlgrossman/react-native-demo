import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import MainText from './MainText';

function CardItem({item}) {
    return (
        <View style={styles.card}>
            <Image  style={styles.img} resizeMode="cover" source={item.img} />
            <View  style={styles.details}>
                <MainText style={ {color: 'black'}}>{item.title}</MainText>
                <MainText style={ {color: 'blue'}}>{item.subTitle}</MainText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        overflow: 'hidden',
    },
    details: {
        gap: 6,
        padding: 20
    },
    img: {
        width: '100%'
    }
})

export default CardItem;