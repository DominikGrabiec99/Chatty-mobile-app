import { Bubble } from 'react-native-gifted-chat'

const RenderBubble = props => {
  return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#993AFC',
            borderRadius: 12,
            borderBottomEndRadius: 0,
            marginBottom: 10,
            width: '60%',
            marginRight: 10,
            paddingVertical: 4
          },
          left: {
            backgroundColor: '#FFFFFF',
            marginBottom: 10,
            borderRadius: 12,
            borderBottomStartRadius: 0,
            width: '60%',
            paddingVertical: 2
          }
        }}
        textStyle={{
          right: {
            color: '#fff'
          }
        }}
      />
    );
};

export default RenderBubble;
