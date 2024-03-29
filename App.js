import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Text} from "galio-framework"
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Navigators/AuthStack';

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
