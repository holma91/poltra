import { StyleSheet, Text, View, ScrollView } from "react-native";

const StatScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Statistik</Text>
      </View>
    </ScrollView>
  );
};

export default StatScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
  },
  titleText: {
    letterSpacing: "-2px",
    fontSize: "50px",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "20%",
  },
});
