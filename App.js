import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Picker } from '@expo/ui/jetpack-compose';
import { useState } from 'react';

export default function App() {
  const [show, setShow] = useState(true)

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <Button
        title='Press this button and immediately try to scroll to see the lag'
        onPress={() => setShow(!show)}
      />
      <View
        importantForAccessibility={show ? "auto" : "no-hide-descendants"}
      >
        {Array.from({ length: 30 }).map((_, idx) => (
          <Picker
            key={idx}
            options={['$', '$$', '$$$', '$$$$']}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginVertical: 50
  },
});
