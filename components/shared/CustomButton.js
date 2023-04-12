import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import styles from "../Styles"

export default function CustomButton({
  onPress,
  text,
  bgColor ="#f9fec2"
  // buttonWidth = 300
}) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={[styles.buttonText, {backgroundColor: bgColor }]}>{text}</Text>
    </Pressable>
  );
}

