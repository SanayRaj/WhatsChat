import React from 'react';
import Colors from '../Utils/colors';
import {Container, HStack, Text} from 'native-base';

type ChatItem = {
  id: String;
  message: String;
};

export default function Message({id, message}: ChatItem) {
  return (
    <HStack justifyContent={id == '_kannans_' ? 'flex-end' : 'flex-start'}>
      <Container
        px={3}
        py={2}
        borderRadius="xl"
        my="1"
        bg={id == '_kannans_' ? 'primary.500' : 'gray.300'}
        maxW="3/4">
        <Text
          color={id == '_kannans_' ? Colors.stone[100] : Colors.stone[700]}
          fontSize="sm">
          {message}
        </Text>
      </Container>
    </HStack>
  );
}
