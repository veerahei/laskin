import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';


export default function App() {
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const [result, setResult] = useState();

  function handleSum() {
    setResult(firstNumber + secondNumber);
  }

  function handleSubtraction() {
    setResult(firstNumber - secondNumber);
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result} </Text>
      <TextInput
        placeholder='Insert a number'
        keyboardType='number-pad'
        onChangeText={number => setFirstNumber(parseInt(number))}
        value={firstNumber}
      />
      <TextInput
        placeholder='Insert a number'
        keyboardType='number-pad'
        onChangeText={number => setSecondNumber(parseInt(number))}
        value={secondNumber}
      />
      <View style={styles.buttons}>
        <Button
          title='+'
          onPress={handleSum}
        />
        <Button
          title='-'
          onPress={handleSubtraction}
        />

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    flexDirection: "row"
  }
});
