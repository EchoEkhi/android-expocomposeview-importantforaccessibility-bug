import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, ScrollView, Animated, View } from 'react-native';
import { Picker } from '@expo/ui/jetpack-compose';
import { useState, useRef, useEffect } from 'react';

export default function App() {
  const [show, setShow] = useState(true)
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: show ? 1 : 0.1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [show]);

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <Button
        title='Press this button to see the lag'
        onPress={() => setShow(!show)}
      />
      <View
        importantForAccessibility={show ? "auto" : "no-hide-descendants"}
      >
        <Animated.View style={{ opacity }}>
          {Array.from({ length: 50 }).map((_, idx) => (
            <Picker
              key={idx}
              options={['$', '$$', '$$$', '$$$$']}
            />
          ))}
        </Animated.View>
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
