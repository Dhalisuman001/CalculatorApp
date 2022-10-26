import { useState } from "react";
import { SafeAreaView, StyleSheet, Switch, Text, View } from "react-native";
import MyKeyBoard from "./src/components/MyKeyBoard";
import { ThemeContext } from "./src/context/ThemeContext";
import myColors from "./src/styles/Color";

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={theme === "light" ? styles.containerLight : styles.containerDark}
      >
        <Switch
          value={theme === "light"}
          onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <MyKeyBoard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  containerDark: {
    flex: 1,
    backgroundColor: myColors.dark,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
