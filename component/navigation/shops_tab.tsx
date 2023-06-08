import * as React from 'react';
import {View, Text} from 'react-native';

function TabShopsScreen({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'SHOPS',
    });
  });
  return (
    <View>
      <Text>ShopsScreen</Text>
    </View>
  );
}

export default TabShopsScreen;
