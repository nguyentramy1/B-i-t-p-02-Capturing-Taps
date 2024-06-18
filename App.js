import { Text, SafeAreaView, StyleSheet, Button, Alert } from 'react-native';
export default function App() {
  // Define the onPress handler
  const handlePress = () => {
    Alert.alert('hello');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Tap me"
        onPress={handlePress}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});
