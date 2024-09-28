import React, { useState, useRef } from 'react';
import { View, StyleSheet, Image, Button, TouchableOpacity, Alert, ScrollView } from 'react-native';
import * as ImagePicker from "expo-image-picker";

import MainText from '../components/MainText';
import Screen from '../components/Screen';

function ImagesScreen(props) {
  const [images, setImages] = useState([]);

  const scrollViewRef = useRef();

  const selectImage = async () => {
    try {
      const res  = await ImagePicker.launchImageLibraryAsync();
      if (!res.canceled) {
        setImages(prev => [...prev, { uri: res.assets[0].uri }])
        // console.log(res.assets[0].uri);
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  const handleImgPress = (index) => {
    Alert.alert(
      'Delete Image',
      'Are you sure you want to delete this image?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => deleteImage(index),
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  }

  const deleteImage = (i) => {
    setImages(prev => prev.filter((_, index) => index != i))
  }


  return (
    <Screen>
      <View style={styles.container}>
        <ScrollView horizontal ref={scrollViewRef} onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true }) } >
          {images.map((img, index) => (
            <TouchableOpacity key={index} onPress={() => handleImgPress(index)}>
              <Image
                key={index} // Adding a key prop
                style={styles.img}
                source={{ uri: img.uri }} // Ensuring source is an object with a uri property
              />
            </TouchableOpacity>
          ))}

        </ScrollView>
        <Button
        title="add image"
        onPress={selectImage}/>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
  img: {
    width: 100,
    height: 100
  }
});

export default ImagesScreen;