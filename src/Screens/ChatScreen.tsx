import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {FlatList, StatusBar, Text, TextInput, View} from 'react-native';
import Avatar from '../Components/Avatar';
import IconButton from '../Components/IconButton';
import Message from '../Components/Message';
import {Colors, Data} from '../Utils/';

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const navigation = useNavigation();

  return (
    <View className="bg-black flex-1">
      <StatusBar backgroundColor={Colors.black} barStyle="light-content" />
      <View className="flex flex-row items-center px-2">
        <IconButton
          icon={'chevron-back'}
          color={Colors.white}
          onPress={() => navigation.goBack()}
        />
        <View className="flex-1 items-center">
          <Text className="text-gray-100 text-lg font-[Montserrat-SemiBold]">
            David East
          </Text>
          <Text className="text-green-400 text-sm font-[Montserrat-Medium]">
            Online
          </Text>
        </View>
        <Avatar
          w={28}
          h={28}
          alt="avatar"
          source={require('../../assets/images/avatars/fox.png')}
        />
      </View>
      <FlatList
        data={Data}
        className="p-2 flex-1"
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({item}) => <Message id={item.id} message={item.message} />}
      />
      <View className="flex flex-row items-center bg-neutral-900 mx-2 mb-1 rounded-full pr-2">
        <IconButton size={26} icon="happy-outline" color={Colors.green[500]} />
        <TextInput
          value={message}
          onChangeText={text => setMessage(text)}
          placeholder="Type message"
          placeholderTextColor={Colors.gray[400]}
          className="flex-1"
        />
        <IconButton
          icon="send"
          color={Colors.black}
          backgroundColor={Colors.green[500]}
          size={18}
        />
      </View>
    </View>
  );
}
