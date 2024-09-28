import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const useLocation = () => {
  const [location, setLocation] = useState(null);

  const askPermissions = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') return;
    const { coords } = await Location.getCurrentPositionAsync({});
    setLocation(coords);
  };

  useEffect(() => {
    askPermissions();
  }, []);

  return location;
};

export default useLocation;
