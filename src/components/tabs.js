import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default Tabs = (props) => {
  const { texto } = props;
  const options = ["Pomodoro", "Break", "short break"];

  return (
    <View style={{ flexDirection: "row" }}>
      {options.map((item, index) => (
        <TouchableOpacity key={index} style={styles.boton}>
          <Text>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  boton: {
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 5,
    padding: 10,
    margin: 5,
    alignItems: "center",
  },
});
