// colors:  https://reactnative.dev/docs/colors 

import { StyleSheet, Text, View, ScrollView, AppRegistry, processColor} from 'react-native';
import { PieChart, BarChart, LineChart } from 'react-native-charts-kit';


export default function Statistics({navigation}) {
  
  return (
    <ScrollView style={styles.wrapper}>
    
    <Text style={styles.titleText}>Din Statistik</Text>

    <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 20, marginRight: 20,}}/>

    <Text style={styles.chartText}>Hur du röstar</Text>
    <PieChart
        data={pieChartData}
        height={200}
        width={360}
        chartConfig={styles.chartConfig}
        accessor="votes"
        style={styles.graphStyle}
        backgroundColor={'white'}
      />

    <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 20, marginRight: 20,}}/>  

    <Text style={styles.chartText}>Din aktivitet</Text>
    <PieChart
        data={pieChartData2}
        height={200}
        width={360}
        chartConfig={styles.chartConfig}
        accessor="votes"
        style={styles.graphStyle}
        backgroundColor={'white'}
      />

    <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 20, marginRight: 20,}}/> 

    <Text style={styles.chartText}>Dina åsikter</Text>

    <PieChart
        data={pieChartData3}
        height={200}
        width={360}
        chartConfig={styles.chartConfig}
        accessor="votes"
        style={styles.graphStyle}
        backgroundColor={'white'}
      />

    <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 20, marginRight: 20,}}/>
  
    <Text style={styles.chartText}>Vänster eller Höger</Text>

    <PieChart
        data={pieChartData4}
        height={200}
        width={360}
        chartConfig={styles.chartConfig}
        accessor="votes"
        style={styles.graphStyle}
        backgroundColor={'white'}
      />

    <View style={{borderBottomColor: 'black', borderBottomWidth: 1, marginLeft: 20, marginRight: 20,}}/>
  


    </ScrollView>

  );
}


const pieChartData = [
  { name: 'Upvotes', votes: 88, color: 'palegreen', legendFontColor: 'black', legendFontSize: 15 },
  { name: 'Downvotes', votes: 20, color: 'orangered', legendFontColor: 'black', legendFontSize: 15 },
]

const pieChartData2 = [
  { name: 'Upvotes', votes: 40, color: 'cornsilk', legendFontColor: 'black', legendFontSize: 15 },
  { name: 'Downvotes', votes: 50, color: 'cornflowerblue', legendFontColor: 'black', legendFontSize: 15 },
]

const pieChartData3 = [
  { name: 'Upvotes', votes: 5, color: 'lightblue', legendFontColor: 'black', legendFontSize: 15 },
  { name: 'Downvotes', votes: 90, color: 'lightcoral', legendFontColor: 'black', legendFontSize: 15 },
]

const pieChartData4 = [
  { name: 'Upvotes', votes: 60, color: 'mistyrose', legendFontColor: 'black', legendFontSize: 15 },
  { name: 'Downvotes', votes: 90, color: 'navy', legendFontColor: 'black', legendFontSize: 15 },
]


const styles = StyleSheet.create({
    chartConfig: {
      backgroundColor: 'white',
      backgroundGradientFrom: 'white',
      backgroundGradientTo: 'white',
      color: (opacity = 1) => `rgba(${0}, ${0}, ${0}, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      barPercentage: 0.5,
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      },
      useShadowColorFromDataset: false,
      strokeWidth: 2,     
    
    
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
      textAlign: 'left',
      fontWeight: 'bold',
      marginTop: '20%',
      marginBottom: '5%',
      marginLeft: '4%',
    },
    chartText: {
      letterSpacing: '-1px',
      fontSize: '20px',
      textAlign: 'left',
      fontWeight: 'bold',
      marginTop: '10%',
      marginBottom: '2%',
      marginLeft: '4%',
    },
    container2: {
      flex: 1,
      backgroundColor: '#F5FCFF'
    },
    chart: {
      flex: 1
    }
  });
  
