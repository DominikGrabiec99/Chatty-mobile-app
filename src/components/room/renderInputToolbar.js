import { Composer, InputToolbar} from 'react-native-gifted-chat';

const renderInputToolbar = (props, isFocus) => {
  return (
    <InputToolbar
      {...props}
      containerStyle={{
        backgroundColor: '#B6DEFD',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 16,
        paddingTop: 10,
        paddingHorizontal: 10
      }}
      placeholder=""
      renderComposer={props => (
      <Composer {...props} 
        textInputStyle={[{
          color: '#1A1A1A', 
          backgroundColor: '#FFFFFF',
          borderRadius: 12,
          borderBottomRightRadius: 0,
          width: 30,
          padding: 10
        }, isFocus && {borderColor: '#5603AD',  borderWidth: 3}]}
      />
      )}
    />
  );
};

export default renderInputToolbar