import { Composer, InputToolbar} from 'react-native-gifted-chat';
import { StyleSheet, TextInput } from 'react-native';

const renderInputToolbar = props => {
  return (
    <InputToolbar
      {...props}
      containerStyle={{
        backgroundColor: '#B6DEFD',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,
        paddingTop: 10,
        paddingHorizontal: 10
      }}
      placeholder=""
      renderComposer={props => (
      <Composer {...props} textInputStyle={{
        color: '#1A1A1A', 
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderBottomRightRadius: 0,
        width: 30,
        padding: 10
      }}/>
      )}
    />
  );
};

const styles = StyleSheet.create({
  input: {

  }
})

export default renderInputToolbar