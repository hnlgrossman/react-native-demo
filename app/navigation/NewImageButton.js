import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon2 from 'react-native-vector-icons/AntDesign';
import TouchableScale from 'react-native-touchable-scale';

import colors from '../config/colors';

function NewImageButton({onPress}) {
  return (
    <TouchableScale style={styles.container} onPress={onPress}>
      <Icon2 name="pluscircleo" size={40} color="#fff" />
    </TouchableScale>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 10,
    width: 80,
    height: 80,
    backgroundColor: colors.color1,
    borderRadius: 50,
    bottom: 22
  }
});

export default NewImageButton;