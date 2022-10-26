import React, { useState } from "react";
import { View, Text } from "react-native";
import myColors from "../styles/Color";
import { Styles } from "../styles/GlobalStyles";
import Button from "./Button";

const MyKeyBoard = () => {
  //state
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState(null);

  // function
  const handlePressDigit = (value) => setNum1(num1 + value);

  const handlePressOperator = (value) => {
    setOperation(value);
    setNum2(num1);
    setNum1("");
  };

  const clear = () => {
    setNum1("");
    setNum2("");
    setOperation("");
    setResult(null);
  };

  const getResult = () => {
    switch (operation) {
      case "+":
        clear();
        setResult(parseInt(num2) + parseInt(num1));
        break;
      case "-":
        clear();
        setResult(parseInt(num2) - parseInt(num1));
        break;
      case "*":
        clear();
        setResult(parseInt(num2) * parseInt(num1));
        break;
      case "/":
        clear();
        setResult(parseInt(num2) / parseInt(num1));
        break;
      default:
        clear();
        setResult(0);
        break;
    }
  };
  const Display = () => {
    if (result !== null) {
      return (
        <Text
          style={
            result < 99999
              ? [Styles.screenFirstNumber, { color: myColors.result }]
              : [
                  Styles.screenFirstNumber,
                  { fontSize: 50, color: myColors.result },
                ]
          }
        >
          {result?.toString()}
        </Text>
      );
    }
    if (num1 && num1.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{num1}</Text>;
    }
    if (num1 === "") {
      return <Text style={Styles.screenFirstNumber}>{"0"}</Text>;
    }
    if (num1.length > 5 && num1.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>{num1}</Text>
      );
    }
    if (num1.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>{num1}</Text>
      );
    }
  };

  return (
    <>
      <View style={Styles.viewBottom}>
        <View
          style={{
            height: 120,
            width: "90%",
            justifyContent: "flex-end",
            alignSelf: "center",
          }}
        >
          <Text style={Styles.screenSecondNumber}>
            {num2}
            <Text style={{ color: "purple", fontSize: 50, fontWeight: "500" }}>
              {operation}
            </Text>
          </Text>
          {Display()}
        </View>
        <View style={Styles.row}>
          <Button title="C" isGray onPress={clear} />
          <Button
            title="+/-"
            isGray
            onPress={() => handlePressOperator("+/-")}
          />
          <Button title="％" isGray onPress={() => handlePressOperator("％")} />
          <Button title="÷" isBlue onPress={() => handlePressOperator("/")} />
        </View>
        <View style={Styles.row}>
          <Button title="7" onPress={() => handlePressDigit("7")} />
          <Button title="8" onPress={() => handlePressDigit("8")} />
          <Button title="9" onPress={() => handlePressDigit("9")} />
          <Button title="×" isBlue onPress={() => handlePressOperator("*")} />
        </View>
        <View style={Styles.row}>
          <Button title="4" onPress={() => handlePressDigit("4")} />
          <Button title="5" onPress={() => handlePressDigit("5")} />
          <Button title="6" onPress={() => handlePressDigit("6")} />
          <Button title="-" isBlue onPress={() => handlePressOperator("-")} />
        </View>
        <View style={Styles.row}>
          <Button title="1" onPress={() => handlePressDigit("1")} />
          <Button title="2" onPress={() => handlePressDigit("2")} />
          <Button title="3" onPress={() => handlePressDigit("3")} />
          <Button title="+" isBlue onPress={() => handlePressOperator("+")} />
        </View>
        <View style={Styles.row}>
          <Button title="." onPress={() => handlePressDigit(".")} />
          <Button title="0" onPress={() => handlePressDigit("0")} />
          <Button title="⌫" onPress={() => setNum1(num1.slice(0, -1))} />
          <Button title="=" isBlue onPress={() => getResult()} />
        </View>
      </View>
    </>
  );
};

export default MyKeyBoard;
