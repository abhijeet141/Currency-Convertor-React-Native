import react, { useState } from "react";
import {
  Text,
  ScrollView,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";

import Snackbar from "react-native-snackbar";

const currencyperRuppee = {
  DOLLAR: 0.012,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.74,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000004
}

const App = () => {
  const [input, setInput] = useState(0);
  const [output, setOutput] = useState(0);


  const buttonPressed = (currency) => {
    if(!input){
      Snackbar.show({
        text: 'Please Enter A Value',
        backgroundColor: "#EA7773",
        textColor: "#000000",
      });
    }
    let result = parseFloat(input)*currencyperRuppee[currency];
    setOutput(result.toFixed(2))
  }
  return(
  <ScrollView backgroundColor={"#1b262c"}
  keyboardShouldPersistTaps="handled"
  contentInsetAdjustmentBehavior="automatic">
    <SafeAreaView style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultValue}>{output}</Text>
      </View>
      <View style={styles.inputConatiner}>
        <TextInput
        style={styles.inputValue}
        keyboardType="numeric"
        placeholder="Enter Value"
        placeholderTextColor={"#FFFFFF"}
        value = {input}
        onChangeText = {(input) => setInput(input)}
        >
        </TextInput>
      </View>
      <View style = {styles.convertButtonContainer}>
        {Object.keys(currencyperRuppee).map((currency) => (
          <TouchableOpacity
          key = {currency}
          style = {styles.convertButton}
          onPress = {() => {
            buttonPressed(currency)
          }}>
            <Text style={styles.convertButtonText}>{currency}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  </ScrollView>
)};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b262c",
  },
  resultContainer: {
    height: 70,
    marginTop: 80,
    borderColor: "#bbe1fa",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  resultValue: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "bold",
  },
  inputConatiner: {
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#bbe1fa",
  },
  inputValue: {
   fontSize: 30,
   textAlign: "center",
   color: "#FFFFFF",
  },
  convertButtonContainer: {
    flexDirection:"row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  convertButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    width: "33.33%",
    borderWidth: 2,
    borderColor: "#bbe1fa",
    marginTop: 10,
    backgroundColor: "#0f4c75"
  },
  convertButtonText: {
    color: "#FFF",
    fontSize: 15
  },
});

export default App;