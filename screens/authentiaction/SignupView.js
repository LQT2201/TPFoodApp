import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ImageBackground,Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebase';

const SignupView = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = () => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Đăng ký thành công
        const user = userCredential.user;
        
        Alert.alert('Alert Title', 'Đăng kí tài khoản thành công', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
          navigation.navigate('LoginView');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Thất bại', 'That email address is already in use!', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
        }
      
        if (error.code === 'auth/invalid-email') {
            Alert.alert('Thất bại', 'That email address is invalid!', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
        }
      
          console.error(error);
        
      });
  }

  return (
    <ImageBackground
      // source={require('../assets/background.png')}
      style={styles.signup_view}>
      <SafeAreaView>
        <View>
          <View style={styles.signup_infor}>
            <Ionicons name="person-outline" style={{ fontSize: 18 }}></Ionicons>
            <TextInput
              placeholder='Enter email'
              style={{ marginLeft: 10 }}
              onChangeText={text => setEmail(text)} // Lưu giá trị của TextInput vào state email
              value={email} // Sử dụng giá trị từ state để hiển thị trong TextInput
            />
          </View>
          <View style={styles.signup_infor}>
            <Ionicons name="mail-outline" style={{ fontSize: 18 }}></Ionicons>
            <TextInput
              placeholder='Enter password'
              secureTextEntry={true}
              style={{ marginLeft: 10 }}
              onChangeText={text => setPassword(text)} // Lưu giá trị của TextInput vào state password
              value={password} // Sử dụng giá trị từ state để hiển thị trong TextInput
            />
          </View>
        </View>
        <View style={styles.button_display}>
          <TouchableOpacity style={styles.button_option} onPress={signUp}>
            <Text style={styles.button_option_content}>Create</Text>
          </TouchableOpacity>
          {/* ... Các TouchableOpacity khác */}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  signup_view: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signup_infor: {
    borderWidth: 1,
    width: 300,
    padding: 10,
    borderRadius: 5,
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button_option: {
    padding: 10,
    margin: 10,
    backgroundColor: 'green',
    color: 'white',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'transparent',
    width: 100,
  },
  button_option_content: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button_display: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default SignupView;
