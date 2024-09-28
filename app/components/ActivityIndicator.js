import LottieView from 'lottie-react-native';
import React from 'react';

function ActivityIndicator({ visible=false}) {
  if (!visible) return null;
  
  return (
    <LottieView
      source={require("../assets/animations/loading.json")}
      autoPlay
      loop
      
      style={{
        width: 200,
        height: 200,
        flex: 1,
        alignSelf: 'center',
        position: 'absolute',
        zIndex: 1,
        top: '40%'
      }}
    />
  );
}

export default ActivityIndicator;