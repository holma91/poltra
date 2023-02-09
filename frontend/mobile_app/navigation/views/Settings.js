import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Settings({navigation}) {
  return (
    <ScrollView style={styles.wrapper}>
    <View style={styles.container}>
      <Text style ={styles.titleText}>Inställningar</Text>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    container: {
      flex: 1,
      backgroundColor: 'pink',
      alignItems: 'center',
    },
    titleText: {
      letterSpacing: '-2px',
      fontSize: '50px',
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: '20%',
    }
  });
