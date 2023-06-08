import * as React from 'react';
import {View, Text} from 'react-native';

function TabChatScreen({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'CHAT',
    });
  });
  return (
    <View>
      <Text>ChatScreen</Text>
    </View>
  );
}

export default TabChatScreen;
