// colors:  https://reactnative.dev/docs/colors 

import { StyleSheet, Text, View, ScrollView, AppRegistry, processColor} from 'react-native';
import { PieChart } from 'react-native-charts-kit';


export default function Statistics({navigation}) {
  
  return (
    <ScrollView style={styles.wrapper}>
    
    <View style={styles.container}>
      <Text style={styles.titleText}>Pie Chart</Text>

    </View>

    <PieChart
        data={pieChartData}
        height={200}
        width={400}
        chartConfig={styles.chartConfig}
        accessor="population"
        style={styles.graphStyle}
      />
    </ScrollView>

  );
}


const pieChartData = [
  { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
]



const styles = StyleSheet.create({
    chartConfig: {
      backgroundColor: '#ff3e03',
      backgroundGradientFrom: '#ff3e03',
      backgroundGradientTo: '#ff3e03',
      color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${opacity})`
    },
    graphStyle: {
      marginVertical: 8,
      marginHorizontal: 8,
    },

    wrapper: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    container: {
      flex: 1,
      backgroundColor: 'lightcoral',
      alignItems: 'center',
    },
    titleText: {
      letterSpacing: '-1px',
      fontSize: '30px',
      textAlign: 'center',
      //fontWeight: 'bold',
      marginTop: '15%',
      marginBottom: '2%',
    },
    container2: {
      flex: 1,
      backgroundColor: '#F5FCFF'
    },
    chart: {
      flex: 1
    }
  });
  
