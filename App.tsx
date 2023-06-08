import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabHomeScreen from './component/navigation/home_tab';
import TabShopsScreen from './component/navigation/shops_tab';
import TabChatScreen from './component/navigation/chat_tab';
import TabContentsScreen from './component/navigation/contents_tab';
import TabUserScreen from './component/navigation/user_tab';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={TabHomeScreen} />
        <Tab.Screen name="Shops" component={TabShopsScreen} />
        <Tab.Screen name="Chat" component={TabChatScreen} />
        <Tab.Screen name="Contents" component={TabContentsScreen} />
        <Tab.Screen name="User" component={TabUserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
