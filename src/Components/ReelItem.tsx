import React, {useState} from 'react';
import {styled, Text, View} from 'dripsy';
import Video from 'react-native-video';
import {VideoProps} from '../Screens/Home/ReelsScreen';
import {Dimensions, TouchableWithoutFeedback} from 'react-native';

const {height} = Dimensions.get('window');

const StyledTouchableWithoutFeedback = styled(TouchableWithoutFeedback)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: 'flex-end',
  m: '$3',
});

const ReelItem: React.FC<{item: VideoProps}> = ({item}) => {
  const [paused, setPaused] = useState(false);
  console.log(item);

  return (
    <View
      sx={{height, borderBottomWidth: 2, borderBottomColor: '$neutral.900'}}>
      {/* <Video
        source={{uri: item.video_url}} // Can be a URL or a local file.
        resizeMode="cover"
        repeat
        paused={paused}
        muted={false}
        volume={100}
        onBuffer={() => console.log('buffering')} // Callback when remote video is buffering
        onError={() => console.log('Error')} // Callback when video cannot be loaded
        style={{flex: 1}}
      /> */}
      <StyledTouchableWithoutFeedback onPress={() => setPaused(prev => !prev)}>
        <View sx={{flexDirection: 'row', alignItems: 'center'}}>
          {/* <Avatar
                size={40}
                source={require('../../../assets/images/avatars/cat.png')}
              /> */}
          <Text
            sx={{fontWeight: 600, color: '$white', fontSize: '$2', ml: '$2'}}>
            {item.title}
          </Text>
        </View>
        <View
          sx={{
            flexDirection: 'row',
            alignItems: 'center',
            pt: '$2',
            justifyContent: 'space-between',
          }}>
          <Text
            sx={{
              fontWeight: 600,
              color: '$white',
              fontSize: '$1',
              flex: 1,
              pr: 2,
            }}>
            {item.discription}Hey
          </Text>
          {/* <Avatar
                size={36}
                source={require('../../../assets/images/avatars/cat.png')}
              /> */}
        </View>
      </StyledTouchableWithoutFeedback>
    </View>
  );
};

export default ReelItem;
