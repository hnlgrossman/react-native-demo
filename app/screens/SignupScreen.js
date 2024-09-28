import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, Button, Alert } from 'react-native';
import MainText from '../components/MainText';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SignupScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  loadData = async () => {
    const email = await AsyncStorage.getItem('email');
    if (email !== null) setEmail(email)
    const password = await AsyncStorage.getItem('password');
    if (password !== null) setPassword(password)
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleLogin  = async () => {
    // Add login logic here (e.g., validation, API calls, etc.)
    if (email === '' || password === '') {
      Alert.alert('Please enter both email and password');
    } else {
      Alert.alert('Login Successful', `Email: ${email}, Password: ${password}`);
    }
    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('password', password);


  };


  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='cover' style={styles.img} source={require("../assets/bg1.png")} >
        <MainText  style={styles.text}>
        כיף שחזרת!
        התגעגענו
        </MainText>
      </ImageBackground>
      <View style={styles.formCon}>
        <View style={styles.inputsCon}>
          {/* <Text style={styles.label}>Email</Text> */}
          <TextInput
            style={styles.input}
            placeholder="דוא”ל"
            placeholderTextColor="#45477D"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          {/* <Text style={styles.label}>Password</Text> */}
          <TextInput
            style={styles.input}
            placeholder="סיסמה"
            value={password}
            placeholderTextColor="#45477D"
            onChangeText={setPassword}
            textAlign="right"
            secureTextEntry
          />
          {/* <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? "visibility" : "visibility-off"} size={24} color="#888" />
          </TouchableOpacity> */}
        </View>
        <View>
          <Button title="כניסה" onPress={handleLogin} />
          <Text>אנחנו לא חברים עדיין?!</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#E0E0FD'},
  img: { flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center'  },
  formCon: { flex: 1, padding: 40, gap: 50 },
  inputsCon: { gap: 24 },
  text: { color: '#F6AFC3', fontSize: 28, textAlign: 'center', width: 150 },
  input: { color: '#45477D', heigh: 36, borderBottomColor: '#45477D', borderBottomWidth: 2 }
});

export default SignupScreen;