import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TaskFlow</Text>

      <Text style={styles.subtitle}>
        Checkpoint 1: Estructura Base
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F0FE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2937',
  },

  subtitle: {
    marginTop: 10,
    fontSize: 18,
    color: '#4B5563',
  },
});
