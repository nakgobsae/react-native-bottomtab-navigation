import * as React from 'react';
import {View, Text} from 'react-native';

function TabContentsScreen({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'CONTENTS',
    });
  });
  return (
    <View>
      <Text>ShopsScreen</Text>
    </View>
  );
}

export default TabContentsScreen;
