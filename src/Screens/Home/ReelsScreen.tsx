import {FlatList, Text, View} from 'dripsy';
import React from 'react';
import {Dimensions} from 'react-native';
import {Avatar, IconButton} from '../../Components';

const {height} = Dimensions.get('screen');

const ReelItem = () => {
  return (
    <View
      sx={{height, borderBottomWidth: 2, borderBottomColor: '$neutral.900'}}>
      <View testID="VideoPlay" />
      <View
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,

          justifyContent: 'flex-end',
          m: '$3',
        }}>
        <View sx={{flexDirection: 'row', alignItems: 'center'}}>
          <Avatar
            size={40}
            source={require('../../../assets/images/avatars/cat.png')}
          />
          <Text
            sx={{fontWeight: 600, color: '$white', fontSize: '$2', ml: '$2'}}>
            This Goes to be title
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
            This Is Sub title #react #snap #wats chatasd This Is Sub title
            #react #snap #wats chat
          </Text>
          <Avatar
            size={36}
            source={require('../../../assets/images/avatars/cat.png')}
          />
        </View>
      </View>
    </View>
  );
};

export default function ReelsScreen() {
  return (
    <View sx={{flex: 1, bg: '$black'}}>
      <View
        sx={{
          position: 'absolute',
          width: '100%',
          alignItems: 'flex-start',
        }}>
        <IconButton icon="camera" />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        pagingEnabled
        data={[0, 1, 2, 3, 4, 5, 6]}
        renderItem={() => <ReelItem />}
      />
    </View>
  );
}