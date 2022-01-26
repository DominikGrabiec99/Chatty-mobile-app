import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path, Circle, Mask, G} from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

import * as ROUTS from '../../constans/routs'


const Header = ({userName}) => {
  const navigation = useNavigation(); 
  
  return (
    <View style={styles.container}>
      <View style={styles.headerTextBox}>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTS.ROOMS)}
          style={styles.button}
        >
          <Svg width="24" height="24" style={styles.svgArrow} viewBox="0 0 44 44" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <Path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></Path>
          </Svg>
        </TouchableOpacity>
        <View>
          <Svg width="44" height="44" style={styles.profileSvg} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="32" cy="32" r="32" fill="#E9EAEE"/>
            <Mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
              <Circle cx="32" cy="32" r="32" fill="#E9EAEE"/>
            </Mask>
            <G mask="url(#mask0)">
              <Path d="M32 32C38.6274 32 44 26.6274 44 20C44 13.3726 38.6274 8 32 8C25.3726 8 20 13.3726 20 20C20 26.6274 25.3726 32 32 32Z" fill="#BFC1CC"/>
              <Path d="M32 32C51.33 32 67 47.67 67 67C67 86.33 51.33 102 32 102C12.67 102 -3 86.33 -3 67C-3 47.67 12.67 32 32 32Z" fill="#BFC1CC"/>
            </G>
          </Svg>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.text}>{userName}</Text>
          <Text style={styles.textActive}>Active now</Text>
        </View>
      </View>
      <View style={styles.svgBox}>
        <Svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Circle cx="22" cy="22" r="22" fill="white"/>
          <Path d="M29.5024 24.7629C28.7073 23.978 27.7147 23.978 26.9247 24.7629C26.322 25.3605 25.7194 25.9581 25.1269 26.5659C24.9648 26.733 24.8281 26.7684 24.6306 26.657C24.2406 26.4443 23.8253 26.2721 23.4506 26.0392C21.7034 24.9402 20.2398 23.5273 18.9433 21.9371C18.3001 21.147 17.7279 20.3013 17.3278 19.3492C17.2468 19.1567 17.262 19.0301 17.4189 18.8731C18.0216 18.2907 18.6091 17.6931 19.2016 17.0956C20.0271 16.265 20.0271 15.2927 19.1965 14.457C18.7255 13.981 18.2546 13.5151 17.7836 13.039C17.2974 12.5529 16.8163 12.0616 16.3251 11.5805C15.53 10.8057 14.5373 10.8057 13.7473 11.5856C13.1396 12.1832 12.5572 12.7959 11.9393 13.3834C11.3671 13.9253 11.0784 14.5887 11.0176 15.3636C10.9214 16.6246 11.2303 17.8147 11.6659 18.9744C12.5572 21.3749 13.9144 23.507 15.5603 25.4618C17.7836 28.1054 20.4373 30.197 23.5417 31.7061C24.9395 32.3848 26.3879 32.9064 27.9629 32.9925C29.0466 33.0533 29.9886 32.7798 30.7432 31.934C31.2598 31.3567 31.8422 30.83 32.3891 30.278C33.1994 29.4576 33.2045 28.465 32.3992 27.6547C31.437 26.6874 30.4697 25.7252 29.5024 24.7629Z" fill="#5603AD"/>
        </Svg>
        <Svg width="44" height="44" viewBox="0 0 44 44" style={styles.svg} fill="none" xmlns="http://www.w3.org/2000/svg">
          <Circle cx="22" cy="22" r="22" fill="white"/>
          <Path d="M23.643 15H12.357C11.6107 15 11 15.7378 11 16.6601V27.3399C11 28.253 11.6031 29 12.357 29C22.8551 29 22.0949 29 23.643 29C24.3893 29 25 28.2622 25 27.3399V16.6601C25 15.747 24.3893 15 23.643 15Z" fill="#5603AD"/>
          <Path d="M32.3523 15.2047C31.9456 14.9483 31.4485 14.9328 31.0267 15.1581L27.178 17.2174C26.7939 17.4194 26.5529 17.8313 26.5529 18.282V25.7264C26.5529 26.1771 26.7939 26.5812 27.178 26.791L31.0267 28.8503C31.4485 29.0756 31.9456 29.0601 32.3523 28.8036C32.759 28.5472 33 28.0965 33 27.6147V16.4014C33 15.9119 32.7515 15.4612 32.3523 15.2047Z" fill="#5603AD"/>
        </Svg>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
    padding: 10,
    paddingTop: 40,
    backgroundColor: '#b6defd',
    borderRadius: 24,
    borderTopEndRadius: 0,
    borderTopStartRadius: 0
  },
  text: {
    fontSize: 17,
    color: '#390273',
    fontFamily: 'poppins-bold',
    justifyContent: 'flex-end',
    lineHeight: 22
  },
  textActive: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 12
  },
  headerTextBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textBox: {
    justifyContent: 'center'
  },
  svgArrow: {
    color: '#390273',
    fontSize: 22,
    marginRight: 10
  },
  textBtn: {
    fontSize: 24
  },
  profileSvg: {
    marginRight: 12
  },
  svgBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  svg: {
    marginLeft: 10,
  }
})

export default Header;