import {StatusBar} from 'react-native';
import React, {useState} from 'react';
import Message from '../Components/Message';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Colors, Data, Fonts} from '../Utils/';
import {useNavigation} from '@react-navigation/native';
import {
  Avatar,
  FlatList,
  HStack,
  IconButton,
  Input,
  Text,
  VStack,
} from 'native-base';

export default function ChatScreen() {
  const [message, setMessage] = useState('');
  const navigation = useNavigation();

  // console.log(navigation);

  return (
    <VStack flex={1} bg={Colors.gray[100]}>
      <StatusBar backgroundColor={Colors.gray[100]} barStyle="dark-content" />
      <HStack px={2} alignItems="center">
        <IconButton
          borderRadius={100}
          icon={
            <IonIcon
              name="arrow-back-outline"
              size={22}
              color={Colors.primary[500]}
            />
          }
          onPress={() => navigation.goBack()}
        />
        <VStack flex={1} alignItems="center">
          <Text fontFamily={Fonts.Bold} color="gray.700">
            David East
          </Text>
          <Text fontSize={12}>Online</Text>
        </VStack>
        <Avatar
          borderColor="primary.500"
          borderWidth={1}
          size="sm"
          source={require('../../assets/images/avatars/fox.png')}
        />
      </HStack>
      <FlatList
        data={Data}
        px={2}
        pt={2}
        flex={1}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({item}) => <Message id={item.id} message={item.message} />}
      />
      <HStack p={2} bg="white" alignItems={'center'} shadow="9">
        <IconButton
          icon={
            <IonIcon name="happy-outline" color={Colors.gray[700]} size={24} />
          }
        />
        <Input
          flex={1}
          variant="unstyled"
          value={message}
          onChangeText={text => setMessage(text)}
          placeholder="Type message"
          placeholderTextColor={'gray.500'}
          px={0}
        />
        <IconButton
          variant="solid"
          size={36}
          icon={<IonIcon name="send" color={Colors.white} size={18} />}
        />
      </HStack>
    </VStack>
  );
}

const s: any = {
  appbar: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    // fontWeight: 'bold',
    fontFamily: Fonts.Bold,
    fontSize: 16,
    color: Colors.neutral[800],
  },
  userStatus: {
    fontSize: 12,
    color: Colors.neutral[500],
    fontFamily: Fonts.Medium,
  },
  textInput: {
    color: Colors.gray[800],
    flex: 1,
    fontSize: 16,
    fontFamily: Fonts.Medium,
  },
  iconHolder: {
    backgroundColor: Colors.blue[500],
    padding: 10,
    marginRight: 8,
    borderRadius: 100,
  },
  emojieIconHolder: {
    padding: 10,
    marginLeft: 8,
    borderRadius: 100,
  },
};
