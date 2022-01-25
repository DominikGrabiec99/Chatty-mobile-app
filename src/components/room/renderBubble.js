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
            marginBottom: 5
          },
          left: {
            backgroundColor: '#FFFFFF',
            marginBottom: 5,
            borderRadius: 12,
            borderBottomStartRadius: 0,
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
