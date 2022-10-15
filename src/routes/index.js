import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import CreateAccount from '../pages/createAccount';
import Login from '../pages/login';
import Home from '../pages/home';
import User from '../pages/user'; 
import CreateRestaurant from '../pages/createRestaurant';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}
      >
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="user" component={User} />
        <Stack.Screen name="createRestaurant" component={CreateRestaurant} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="createAccount" component={CreateAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;