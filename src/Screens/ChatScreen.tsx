import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import Avatar from '../Components/Avatar';
import IconButton from '../Components/IconButton';
import Message from '../Components/Message';
import {Colors, Data} from '../Utils/';

export default function ChatScreen() {
  const [message, setMessage] = useState('');

  const {params} = useRoute<any>();
  const {goBack, navigate} = useNavigation<any>();

  return (
    <View className="bg-black flex-1">
      <StatusBar backgroundColor={Colors.black} barStyle="light-content" />
      <View className="flex flex-row items-center p-2">
        <IconButton
          icon={'chevron-back'}
          color={Colors.white}
          onPress={() => goBack()}
        />
        <View className="flex-1 items-center">
          <Text className="text-white text-xs font-[Montserrat-SemiBold]">
            {params ? params?.name : 'David East'}
          </Text>
          <Text className="text-primary-500 text-[8px] font-sans">Online</Text>
        </View>
        <TouchableHighlight onPress={() => navigate('Account')}>
          <Avatar
            w={28}
            h={28}
            source={require('../../assets/images/avatars/cat.png')}
          />
        </TouchableHighlight>
      </View>
      <FlatList
        initialScrollIndex={Data.length - 1}
        data={Data}
        className="px-1 flex-1 mb-1"
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({item}) => <Message id={item.id} message={item.message} />}
      />
      <View className="flex flex-row items-center bg-bg-800 mx-2 rounded-full pr-2 mb-3">
        <IconButton
          size={26}
          icon="camera"
          color={Colors.green[500]}
          onPress={() => navigate('Camera')}
        />
        <TextInput
          value={message}
          onChangeText={text => setMessage(text)}
          placeholder="Type message"
          placeholderTextColor={Colors.gray[400]}
          selectionColor={Colors.green[400]}
          className="flex-1 text-white"
        />
        <IconButton
          icon="send"
          color={Colors.bg[800]}
          backgroundColor={Colors.green[700]}
          size={18}
        />
      </View>
    </View>
  );
}
