import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import CreateAccount from '../pages/createAccount';
import Login from '../pages/login';
import Home from '../pages/home';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}  
      >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="createAccount" component={CreateAccount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;