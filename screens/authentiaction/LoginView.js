import React, { useContext, useEffect,useState } from 'react';
import { Button, View, SafeAreaView, Image, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { app } from '../../firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const LoginView = ( {navigation} ) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const gotoSignup = () => {
        navigation.navigate('SignupView');
    }

    const signIn = ()  => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            navigation.navigate('Home');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }

    return (
        <ImageBackground
            // source={require('../assets/logo-apps.png')}
            style={styles.login_view}
        >
            <SafeAreaView >
                <View style={{ marginTop: 50 }}>
                    <View style={styles.login_infor}>
                        <Ionicons name="mail-outline" style={{ fontSize: 18 }}></Ionicons>
                        <TextInput placeholder='Email' style={{ marginLeft: 10, width: 240 }} value={email} onChangeText={setEmail}></TextInput>
                    </View>
                    <View style={styles.login_infor}>
                        <Ionicons name="lock-closed-outline" style={{ fontSize: 18 }}></Ionicons>
                        <TextInput secureTextEntry={true} placeholder='Password' style={{ marginLeft: 10, width: 240 }}
                            value={password} onChangeText={setPassword}
                        ></TextInput>
                    </View>
                </View>

                <View style={styles.button_display}>
                    <TouchableOpacity style={styles.button_option} onPress={signIn}>
                        <Text style={styles.button_option_content}
                        >Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button_option, { backgroundColor: 'green' }]} onPress={gotoSignup}>
                        <Text style={styles.button_option_content}
                        >Signup</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    login_view: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },
    login_infor: {
        borderWidth: 1,
        width: 300,
        padding: 10,
        borderRadius: 5,
        margin: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    forget_password: {
        left: 80,
        color: "pink",
    },
    button_option: {
        padding: 10,
        margin: 10,
        backgroundColor: 'blue',
        color: 'white',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'transparent',
        width: 100

    },
    button_option_content: {
        color: 'white',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    button_display: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

export default LoginView;