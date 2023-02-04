import {NativeWindStyleSheet} from 'nativewind';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  FlatList,
  StatusBar,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Avatar from '../Components/Avatar';
import Input from '../Components/Input';
import {Colors, Supabase, UsersData} from '../Utils';
import {useAuth} from '../Utils/AuthProvider';

export default function UsersScreen({navigation}: any) {
  const {user} = useAuth();
  const [users, setUsers] = useState({});

  useEffect(() => {
    Supabase.from('profiles')
      .select('*')
      .then(val => {
        if (val.error) {
          console.log(val.error);
          Alert.alert(val.error.message, val.error.details);
        } else if (val.data) {
          setUsers(val.data);
        }
      });
  }, []);

  // console.log(users);

  const manageUserChats = (userId: string) => {
    const idPlace = userId > user.uid;
    const isRoomExist = Supabase.from('chat_room').select('id');

    console.log(isRoomExist);
  };

  return (
    <>
      <StatusBar backgroundColor={Colors.black} barStyle="light-content" />
      <View className="flex-1 bg-bg-900">
        <View className="flex flex-row items-center justify-between mx-4 py-6">
          <Text className="text-white font-[Montserrat-Bold] text-3xl">
            Chats
          </Text>
          <Avatar
            w={36}
            h={36}
            source={require('../../assets/images/avatars/cat.png')}
          />
        </View>

        <View>
          <Input
            placeholder="Search User"
            rightIcon={
              <IonIcon size={22} color={Colors.gray[400]} name="search" />
            }
            containerStyle="mb-5 mx-4"
          />
          <FlatList
            data={UsersData}
            renderItem={({item}) => (
              <TouchableHighlight
                onPress={() => manageUserChats(item?.uid)}
                // activeOpacity={0.6}
                underlayColor={Colors.bg[800]}
                className="px-4 py-1">
                <View className="py-1 flex flex-row items-center">
                  <View
                    className={`border ${
                      item.is_online ? 'border-green-500' : 'border-transparent'
                    }`}>
                    <Avatar source={{uri: item.avatar_url}} />
                  </View>
                  <View className="ml-2">
                    <Text className="font-[Montserrat-SemiBold] text-gray-300 text-base">
                      {item.username}
                    </Text>
                    {/* <Text className="font-[Montserrat-Medium] text-gray-400">
                  
                    </Text> */}
                  </View>
                </View>
              </TouchableHighlight>
            )}
          />
        </View>
      </View>
    </>
  );
}

('2022pass.whatschat');
