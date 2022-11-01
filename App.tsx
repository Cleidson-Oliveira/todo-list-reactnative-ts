import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TasksProvider } from './src/contexts/task/provider';
import { Home } from './src/screens/home';
import { colors } from './src/styles/colors';

export default function App() {

  return (
    <TasksProvider>
      <View style={styles.container}>
        <Home/>
        <StatusBar style="dark" />
      </View>
    </TasksProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray[600],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
