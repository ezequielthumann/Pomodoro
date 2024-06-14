import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["POMODORO", "SHORT BRAKE", "BRAKE"];

export default function Header({ setTime, setCurrentTime, currentTime }) {
  function handlePress(index) {
    const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
    setCurrentTime(index);
    setTime(newTime * 60);
  }

  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handlePress(index)}
          style={[
            styles.boton,
            currentTime !== index && { borderColor: "transparent" },
          ]}
        >
          <Text style={{ fontWeight: "bold" }}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  boton: {
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    padding: 10,
    margin: 12,
    alignItems: "center",
    marginVertical: "20",
  },
});
