/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';

const App = () => {
  const [inputNumber, setInputNumber] = useState('');
  const [isPrime, setIsPrime] = useState<any>(null);
  const [timeTaken, setTimeTaken] = useState(0);
  const [submit, setSubmit] = useState(false);

  const checkPrime = (inputNumber: number) => {
    if (inputNumber <= 1) {
      return false;
    }

    for (let i = 2; i < inputNumber; i++) {
      if (inputNumber % i === 0) {
        return false;
      }
    }
    return true;
  };

  const handleCheckPrime = () => {
    const num = parseInt(inputNumber);

    if (isNaN(num)) {
      setIsPrime(null);
      setTimeTaken(0);
      return;
    }
    const startTime = performance.now();

    const primeResult = checkPrime(num);
    const endTime = performance.now();

    setIsPrime(primeResult);
    setTimeTaken(endTime - startTime);
    setSubmit(true);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter a number"
        value={inputNumber}
        onChangeText={e => {
          setSubmit(false);
          setInputNumber(e);
          setTimeTaken(0);
        }}
      />
      <Button
        title="Check Prime"
        onPress={handleCheckPrime}
        disabled={inputNumber === ''}
      />
      {submit && (
        <Text style={styles.result}>
          {inputNumber} is {isPrime ? 'a Prime number' : 'not a Prime number'}.
        </Text>
      )}

      <Text style={styles.result}>Time taken: {timeTaken} ms</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default App;
