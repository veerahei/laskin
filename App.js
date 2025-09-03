import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';


export default function App() {
  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const [result, setResult] = useState();

  const [calculations, setCalculations] = useState([]);

  function handleClick(operator) {

    if (operator === "+") {
      setResult(parseInt(firstNumber) + parseInt(secondNumber));
      setCalculations([...calculations, firstNumber + " + " + secondNumber + " = " + (parseInt(firstNumber) + parseInt(secondNumber))]);
    } else {
      setResult(parseInt(firstNumber) - parseInt(secondNumber));
      setCalculations([...calculations, firstNumber + " - " + secondNumber + " = " + (parseInt(firstNumber) - parseInt(secondNumber))]);
    }

    setFirstNumber("");
    setSecondNumber("");
  }

  return (
    <View style={styles.container}>
      <Text>Result: {result} </Text>
      <TextInput
        placeholder='Insert a number'
        keyboardType='number-pad'
        onChangeText={number => setFirstNumber(number)}
        value={firstNumber}
      />
      <TextInput
        placeholder='Insert a number'
        keyboardType='number-pad'
        onChangeText={number => setSecondNumber(number)}
        value={secondNumber}
      />
      <View style={styles.buttons}>
        <Button
          title='+'
          onPress={() => handleClick("+")}
        />
        <Button
          title='-'
          onPress={() => handleClick("-")}
        />

      </View>
      <Text>History: </Text>
      <FlatList
        data={calculations}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
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
    marginTop: 100,
  },
  buttons: {
    flexDirection: "row"
  }
});
