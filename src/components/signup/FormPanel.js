import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import Svg, { Path} from 'react-native-svg';

import * as ROUTS from '../../constans/routs'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { useNavigation } from '@react-navigation/native';

import PrivacyPolitic from "./PrivacyPolitic";
import LoginNav from "./LoginNav";

const FormPanel = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

  const [isErrorEmial, serIsErrorEmial]= useState(false);

  const [notSeePassword, notSetSeePassword] = useState(true);
  const [notSeePasswordConf, notSetSeePasswordConf] = useState(true);

  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedFirstName, setIsFocusedFirstName] = useState(false);
  const [isFocusedLastName, setIsFocusedLastName] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isFocusedPasswordConf, setIsFocusedPasswordConf] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    setIsFocusedEmail(false)
    setIsFocusedFirstName(false)
    setIsFocusedLastName(false)
    setIsFocusedPassword(false)
    setIsFocusedPasswordConf(false)
  }, [])

  useEffect(() => {
    if(email.includes(' ')) {
      serIsErrorEmial(true)
      return null
    } else {
      serIsErrorEmial(false)
    }
  }, [isErrorEmial])

  const handleOnSubmit = () => {
    navigation.navigate(ROUTS.LOGIN)
  }

  return (
    <KeyboardAwareScrollView>
      <View style={styles.formContainer}>
        <View style={styles.inputsBox}>
          <View>
            <Text style={styles.label}>e-mail addres</Text>
            <TextInput
              style={[styles.input, isFocusedEmail && {borderColor: '#5603AD',  borderWidth: 2}, isErrorEmial && {borderColor: '#FF445A',  borderWidth: 2}]}
              onChangeText={setEmail}
              value={email}
              onFocus={() => setIsFocusedEmail(true)}
              onBlur={() => setIsFocusedEmail(false)}
            />
          </View>
          <View>
            <Text style={styles.label}>first name</Text>
            <TextInput
              style={[styles.input, isFocusedFirstName && {borderColor: '#5603AD',  borderWidth: 2}]}
              onChangeText={setFirstName}
              value={firstName}
              onFocus={() => setIsFocusedFirstName(true)}
              onBlur={() => setIsFocusedFirstName(false)}
            />
          </View>
          <View>
            <Text style={styles.label}>last name</Text>
            <TextInput
              style={[styles.input, isFocusedLastName && {borderColor: '#5603AD',  borderWidth: 2}]}
              onChangeText={setLastName}
              value={lastName}
              onFocus={() => setIsFocusedLastName(true)}
              onBlur={() => setIsFocusedLastName(false)}
            />
          </View>
          <View style={styles.inputPassBox}>
            <Text style={styles.label}>password</Text>
            <View style={styles.inputSvgBox}>
              <TextInput
                style={[styles.input, isFocusedPassword && {borderColor: '#5603AD',  borderWidth: 2}]}
                onChangeText={setPassword}
                value={password}
                onFocus={() => setIsFocusedPassword(true)}
                onBlur={() => setIsFocusedPassword(false)}
                secureTextEntry={notSeePassword}
              />
              {notSeePassword ? (
                <Svg width="18" height="18" onPress={() => notSetSeePassword(false)} style={[styles.svgVision, {transform: [{translateY: -9}]}]} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path d="M6.36663 11.1059C4.32406 8.39883 6.76038 4.86563 9.9807 5.77969C7.33695 7.36524 10.5959 10.698 12.2201 8.01563C13.2397 11.9566 8.3846 13.7496 6.36663 11.1059Z" fill="#BFC1CC"/>
                  <Path fill-rule="evenodd" clip-rule="evenodd" d="M17.8139 9.60465C13.3526 16.2386 4.64787 16.3582 0.179514 9.60817C-0.0630646 9.23903 -0.059549 8.74684 0.186545 8.38473C4.6549 1.80348 13.3104 1.61012 17.8174 8.3777C18.06 8.74332 18.06 9.23903 17.8139 9.60465ZM2.23967 8.99293C6.48655 4.1484 11.6018 4.08512 15.7572 8.99293C11.6018 13.834 6.46545 13.7707 2.23967 8.99293Z" fill="#BFC1CC"/>
                </Svg>  
              ) : (
                <Svg width="18" height="18" onPress={() => notSetSeePassword(true)} style={[styles.svgVision, {transform: [{translateY: -9}]}]} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path d="M10.4733 2.26051L9.47131 3.96559C6.026 3.81793 2.53147 5.48082 0.186545 8.93668C-0.059549 9.29879 -0.0630646 9.79098 0.179514 10.1636C1.20959 11.7211 2.46819 12.8988 3.84279 13.725L3.34709 14.6215C2.64397 15.9433 4.50373 17.0086 5.29475 15.75L12.4209 3.38903C13.103 2.26051 11.419 0.892934 10.4733 2.26051Z" fill="#BFC1CC"/>
                  <Path d="M17.8173 8.9297C16.6677 7.20001 15.2439 5.93087 13.6935 5.10118L12.6599 6.89415C13.7287 7.50235 14.7728 8.37774 15.7572 9.54493C13.6865 11.9602 11.3732 13.1555 9.04936 13.1555L7.91733 15.1207C11.556 15.5109 15.3388 13.8445 17.8138 10.1567C18.0599 9.79454 18.0599 9.29532 17.8173 8.9297Z" fill="#BFC1CC"/>
                  <Path d="M9.17911 12.9163C12.5963 12.5647 12.7194 9.25654 11.9986 8.02959L9.17911 12.9163Z" fill="#BFC1CC"/>
                </Svg>
              )}
            </View>
          </View>
          <View style={styles.inputPassBox}>
            <Text style={styles.label}>password confirmation</Text>
            <View style={styles.inputSvgBox}>
              <TextInput
                style={[styles.input, isFocusedPasswordConf && {borderColor: '#5603AD',  borderWidth: 2}]}
                onChangeText={setPasswordConf}
                value={passwordConf}
                onFocus={() => setIsFocusedPasswordConf(true)}
                onBlur={() => setIsFocusedPasswordConf(false)}
                secureTextEntry={notSeePasswordConf}
              />
              {notSeePasswordConf ? (
                <Svg width="18" height="18" onPress={() => notSetSeePasswordConf(false)} style={[styles.svgVision, {transform: [{translateY: -9}]}]} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path d="M6.36663 11.1059C4.32406 8.39883 6.76038 4.86563 9.9807 5.77969C7.33695 7.36524 10.5959 10.698 12.2201 8.01563C13.2397 11.9566 8.3846 13.7496 6.36663 11.1059Z" fill="#BFC1CC"/>
                  <Path fill-rule="evenodd" clip-rule="evenodd" d="M17.8139 9.60465C13.3526 16.2386 4.64787 16.3582 0.179514 9.60817C-0.0630646 9.23903 -0.059549 8.74684 0.186545 8.38473C4.6549 1.80348 13.3104 1.61012 17.8174 8.3777C18.06 8.74332 18.06 9.23903 17.8139 9.60465ZM2.23967 8.99293C6.48655 4.1484 11.6018 4.08512 15.7572 8.99293C11.6018 13.834 6.46545 13.7707 2.23967 8.99293Z" fill="#BFC1CC"/>
                </Svg>  
              ) : (
                <Svg width="18" height="18" onPress={() => notSetSeePasswordConf(true)} style={[styles.svgVision, {transform: [{translateY: -9}]}]} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <Path d="M10.4733 2.26051L9.47131 3.96559C6.026 3.81793 2.53147 5.48082 0.186545 8.93668C-0.059549 9.29879 -0.0630646 9.79098 0.179514 10.1636C1.20959 11.7211 2.46819 12.8988 3.84279 13.725L3.34709 14.6215C2.64397 15.9433 4.50373 17.0086 5.29475 15.75L12.4209 3.38903C13.103 2.26051 11.419 0.892934 10.4733 2.26051Z" fill="#BFC1CC"/>
                  <Path d="M17.8173 8.9297C16.6677 7.20001 15.2439 5.93087 13.6935 5.10118L12.6599 6.89415C13.7287 7.50235 14.7728 8.37774 15.7572 9.54493C13.6865 11.9602 11.3732 13.1555 9.04936 13.1555L7.91733 15.1207C11.556 15.5109 15.3388 13.8445 17.8138 10.1567C18.0599 9.79454 18.0599 9.29532 17.8173 8.9297Z" fill="#BFC1CC"/>
                  <Path d="M9.17911 12.9163C12.5963 12.5647 12.7194 9.25654 11.9986 8.02959L9.17911 12.9163Z" fill="#BFC1CC"/>
                </Svg>
              )}
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleOnSubmit}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <PrivacyPolitic />
      <LoginNav />
    </KeyboardAwareScrollView>
  )
};

const styles = StyleSheet.create({
  formContainer: {
    marginHorizontal: 15,
    marginTop: 20,
    flex: 1,
    height: 500
  },
  inputsBox: {
    flex: 1,
    justifyContent: 'space-around'
  },
  input: {
    height: 50,
    borderWidth: 0,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    fontSize: 15,
    lineHeight: 20,
    fontFamily: 'poppies-midium'
  },
  inputPassBox: {
    // marginTop: 25,
  },
  inputSvgBox: {
    position: 'relative'
  },
  svgVision: {
    position: 'absolute',
    right: 10,
    top: '50%'
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'poppies-midium'
  },
  button: {
    backgroundColor: '#5603AD',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 10,
    marginTop: 30
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'poppies-semiBold',
    letterSpacing: 0.1
  }
});

export default FormPanel;

