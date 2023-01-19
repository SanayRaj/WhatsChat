import React from 'react';
import {FlatList, Text, TouchableOpacity, View, StatusBar} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Avatar from '../Components/Avatar';
import Input from '../Components/Input';
import {Colors} from '../Utils';

export default function UsersScreen({navigation}: any) {
  // const {user} = useAuth();

  const Users: {
    name: string;
    number: string;
    lastMessage: string;
    img: any;
  }[] = [
    {
      name: 'Cat',
      number: '+9191919191',
      lastMessage: 'Hai, How are you',
      img: require('../../assets/images/avatars/cat.png'),
    },
    {
      name: 'Dog',
      number: '+9191919191',
      lastMessage: 'Hai, Food Available? Boww',
      img: require('../../assets/images/avatars/dog.png'),
    },
    {
      name: 'Elephant',
      number: '+9191919191',
      lastMessage: 'Hai, How I eat food ? Ambeee',
      img: require('../../assets/images/avatars/elephant.png'),
    },
    {
      name: 'Fox',
      number: '+9191919191',
      lastMessage: 'Did you fear me? grrrrr....',
      img: require('../../assets/images/avatars/fox.png'),
    },
  ];

  return (
    <View className="flex-1 bg-black">
      <StatusBar backgroundColor={Colors.black} barStyle="light-content" />
      <View className="flex flex-row items-center justify-between mx-4 py-6">
        <Text className="text-white font-[Montserrat-Bold] text-3xl">
          Chats
        </Text>
        <Avatar
          w={36}
          h={36}
          source={require('../../assets/images/avatars/dog.png')}
        />
      </View>

      <View className="px-4">
        <Input
          placeholder="Search User"
          rightIcon={
            <IonIcon size={22} color={Colors.gray[400]} name="search" />
          }
          containerStyle="mb-5"
        />
        <FlatList
          data={Users}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Chat', {name: item.name});
              }}
              activeOpacity={0.6}>
              <View className="py-1 flex flex-row items-center">
                <Avatar source={item.img} alt={item.name} />
                <View className="ml-2">
                  <Text className="font-[Montserrat-SemiBold] text-gray-300 text-base">
                    {item.name}
                  </Text>
                  <Text className="font-[Montserrat-Medium] text-gray-400">
                    {item.lastMessage}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

('2022pass.whatschat');
