import React, { useState } from "react";
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet } from "react-native";

const SurveyScreen = () => {
  const [currentScreen, setCurrentScreen] = useState("personalInfo");
  const [name, setName] = useState("");
  const [birthYear, setBirthYear] = useState("");

  const goToTestSelection = () => setCurrentScreen("testSelection");

  const goToTest1 = () => setCurrentScreen("test1");

  const submitTest1 = () => setCurrentScreen("finalMessage");

  return <SafeAreaView style={styles.container}>
      {currentScreen === "personalInfo" && <View style={styles.screen}>
          <Text style={styles.header}>Опитування</Text>
          <Text style={styles.label}>ПІБ:</Text>
          <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Ваше ПІБ" />
          <Text style={styles.label}>Рік народження:</Text>
          <TextInput style={styles.input} onChangeText={setBirthYear} value={birthYear} placeholder="Рік народження" keyboardType="numeric" />
          <Button title="Продовжити" onPress={goToTestSelection} />
        </View>}
      {currentScreen === "testSelection" && <View style={styles.screen}>
          <Text style={styles.header}>Оберіть тест</Text>
          <Button title="Тест 1" onPress={goToTest1} />
          <Button title="Тест 2" disabled />
        </View>}
      {currentScreen === "test1" && <View style={styles.screen}>
          <Text style={styles.header}>Тест 1: ШІ</Text>
          {
        /* This is a simplified representation since radio buttons are not directly supported in React Native */
      }
          <Text onPress={() => submitTest1()} style={styles.buttonText}>
            Завершити
          </Text>
        </View>}
      {currentScreen === "finalMessage" && <View style={styles.screen}>
          <Text style={styles.header}>Дякуємо!</Text>
          <Text>Дані збережено.</Text>
        </View>}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  screen: {
    alignItems: "center",
    width: "100%"
  },
  header: {
    fontSize: 24,
    marginBottom: 20
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: 10
  },
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  buttonText: {
    marginTop: 20,
    color: 'blue'
  }
});
export default SurveyScreen;