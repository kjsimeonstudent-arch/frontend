import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegisterPage from './pages/Registerpage';
import Homepage from './pages/Homepage';
import Reviewpage from './pages/Reviewpage';
import UserListPage from './pages/userlistpage';
import EditUserPage from './pages/edituserpage';

const Stack = createNativeStackNavigator();

export default function Dashboard() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Review" component={Reviewpage} />
        <Stack.Screen name="UserList" component={UserListPage} />
        <Stack.Screen name="EditUser" component={EditUserPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}