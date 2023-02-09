import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import database from '../../assets/data/database.json';

export default function Home({ navigation }) {
  console.log(database);

  return (
    <ScrollView style={styles.wrapper}>
      {database.slice(0, 5).map((article) => {
        return (
          <View style={styles.container} key={article.description}>
            <Text style={styles.titleText}>{article.title}</Text>
            <Text style={styles.content}>{article.content}</Text>
            <Text></Text>
            <Image
              source={{ uri: article.urlToImage }}
              style={{ width: '100%', height: '100%' }}
            />
          </View>
        );
      })}
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
    fontSize: '28px',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '12%',
  },
  content: {
    padding: 20,
  },
});
