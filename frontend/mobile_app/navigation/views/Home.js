import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Home({navigation}) {
  return (
    <ScrollView style={styles.wrapper}>
        <View style={styles.container}>
          <Text style ={styles.titleText}>Hem</Text>
        </View>
        <View style={styles.container}>
          <Text style ={styles.titleText}>Hem</Text>
        </View>
        <View style={styles.container}>
          <Text style ={styles.titleText}>Hem</Text>
        </View>
        <View style={styles.container}>
          <Text style ={styles.titleText}>Hem</Text>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: '#CCCBCB',
    },
    container: {
      flex: 1,
      height: 600,
      width: '100%',
      borderRadius: 50,
      backgroundColor: '#FFFFFF',
      marginTop: 50,
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
