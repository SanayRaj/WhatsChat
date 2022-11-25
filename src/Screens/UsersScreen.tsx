import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Fonts} from '../Utils';
import {
  Avatar,
  FlatList,
  HStack,
  IconButton,
  Input,
  Text,
  View,
  VStack,
} from 'native-base';
import {useAuth} from '../Utils/AuthProvider';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function UsersScreen({navigation}: any) {
  const {user} = useAuth();
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
    <VStack background={'primary.500'} flex={1}>
      <Text fontFamily={Fonts.Bold} color="white" py={6} px={4} fontSize="18">
        Hi {user.username}
      </Text>

      <View
        background={'white'}
        flex={1}
        w="full"
        px="4"
        pt="3"
        borderTopRadius={30}>
        <Input
          placeholder="Search User"
          variant="filled"
          borderRadius="full"
          rightElement={
            <IconButton>
              <IonIcon size={18} name="search" />
            </IconButton>
          }
          my={2}
        />
        <FlatList
          data={Users}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Chat', {name: item.name});
              }}
              activeOpacity={0.6}>
              <HStack py={2}>
                <Avatar size="md" source={item.img} />
                <VStack ml={2}>
                  <Text fontFamily={Fonts.SemiBold} color={'gray.700'}>
                    {item.name}
                  </Text>
                  <Text>{item.lastMessage}</Text>
                </VStack>
              </HStack>
            </TouchableOpacity>
          )}
        />
      </View>
    </VStack>
  );
}

('2022pass.whatschat');
