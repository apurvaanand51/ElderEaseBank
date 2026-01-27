import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏦 ElderEase Bank Portal</Text>
      <Text style={styles.subtitle}>Welcome back! You are securely logged in.</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007bff",
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
    color: "#555",
  },
});
