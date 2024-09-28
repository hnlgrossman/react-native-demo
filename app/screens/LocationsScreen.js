import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';


import useLocation from './app/hooks/useLocation';

function LocationsScreen(props) {
  const location = useLocation()

  useEffect(() => {
    // askPermissions()
    console.log(location);
  }, [location])


  return (
    <View style={styles.container}></View>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default LocationsScreen;