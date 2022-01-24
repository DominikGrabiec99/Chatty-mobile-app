import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Circle} from 'react-native-svg';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rooms</Text>
      <View style={styles.svgBox}>
        <Svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <Circle cx="22" cy="22" r="22" fill="white"/>
          <Path 
            fill-rule="evenodd" 
            clip-rule="evenodd" d="M33.4003 31.3493L27.7053 25.6262C34.5487 14.3252 20.7634 5.19905 12.7904 12.7831C5.05171 21.4967 14.7403 34.3726 25.6054 27.7354L31.3004 33.3039C32.9456 35.1132 35.0502 33.0039 33.4003 31.3493ZM19.6666 12.9799C28.6615 12.9799 28.9521 26.5261 19.6666 26.5261C10.6249 26.5261 10.8827 12.9799 19.6666 12.9799Z"  fill="#5603AD"
          />
        </Svg>
        <Svg width="44" height="44" viewBox="0 0 44 44" style={styles.svg} fill="none" xmlns="http://www.w3.org/2000/svg">
          <Circle cx="22" cy="22" r="22" fill="white"/>
          <Path fill-rule="evenodd" clip-rule="evenodd" d="M14.526 14.4762C14.526 10.507 19.6205 8.15277 22.6197 11.8442C20.2796 12.767 18.2079 15.6862 19.0931 18.9492C19.079 18.9492 19.0649 18.9515 19.0507 18.9539C19.0366 18.9562 19.0225 18.9586 19.0084 18.9586C16.5318 18.9586 14.526 16.9528 14.526 14.4762ZM29.5176 17.4896C29.5176 19.9651 27.5107 21.972 25.0352 21.972C22.5596 21.972 20.5527 19.9651 20.5527 17.4896C20.5527 15.014 22.5596 13.0071 25.0352 13.0071C27.5107 13.0071 29.5176 15.014 29.5176 17.4896ZM34 30.1787C34 35.405 16.0797 35.405 16.0797 30.1787C16.0797 20.9407 34 21.0349 34 30.1787ZM19.6123 20.3052C11.3349 19.1705 6.01434 28.7756 13.7832 30.4142C13.8586 26.0024 17.211 23.3186 21.312 22.3298C20.6057 21.7883 20.0266 21.1009 19.6123 20.3052Z" fill="#5603AD"/>
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
    fontSize: 36,
    color: '#390273',
    fontFamily: 'poppins-bold'
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
