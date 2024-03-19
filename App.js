import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Splash1 from './src/screens/splash/Splash1o.js';
import Splash2 from './src/screens/splash/Splash2o.js';
import Splash3 from './src/screens/splash/Splash3o.js';
import Splash4 from './src/screens/splash/Splash4o.js';

export default function App() {
  return (
    <SafeAreaView>
      <Splash4/>
    </SafeAreaView>
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
