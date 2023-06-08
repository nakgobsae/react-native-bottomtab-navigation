import * as React from 'react';
import {View, Text} from 'react-native';

function TabUserScreen({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'USER',
    });
  });
  return (
    <View>
      <Text>UserScreen</Text>
    </View>
  );
}

export default TabUserScreen;
