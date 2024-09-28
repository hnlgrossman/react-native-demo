import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CardItem from '../components/CardItem';
import Screen from '../components/Screen';

function ItemsScreen(props) {
    const items = [
        {
            img: require('../assets/item_img.jpg'),
            title: 'good camera for sale!',
            subTitle: '100$'
        },
        {
            img: require('../assets/item_img.jpg'),
            title: 'good camera for sale!',
            subTitle: '100$'
        },
    ]
    return (
        <Screen>
            <View style={styles.mainCon}>
                {/* <FlatList 
                    style={styles.list}
                    data={items}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <CardItem item={item} />
                    )}
                /> */}
                {items.map((item, index) => (
                    <CardItem item={item} />
                ))}
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    mainCon: {
        backgroundColor: '#f8f4f4', padding: 20, paddingTop: 60, flex: 1, gap: 20
    },
    // list: { gap: 20}
})

export default ItemsScreen;