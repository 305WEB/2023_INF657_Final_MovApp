import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import styles from "../Styles"

export default function CustomInput({
  placeholder,
  value,
  setValue,
  secureTextEntry,
}) {
  return (
    <TextInput
      style={styles.formField}
      placeholderTextColor="#053B62"
      placeholder={placeholder}
      onChangeText={setValue}
      value={value}
      secureTextEntry={secureTextEntry}
    />
  );
}


