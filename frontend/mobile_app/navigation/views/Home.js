import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';
import database from '../../assets/data/database.json';
import React, { useState } from 'react';
import IonIcon from 'react-native-vector-icons/Ionicons';

export default function Home({ navigation }) {
  const [articleStates, setArticleStates] = useState(
    database.slice(0, 5).map(() => false)
  );

  const handlePress = (index) => {
    setArticleStates((prev) => {
      const newState = [...prev];
      newState[index] = !prev[index];
      return newState;
    });
  };

  return (
    <ScrollView style={styles.wrapper}>
      {database.slice(0, 5).map((article, index) => {
        const isExpanded = articleStates[index];
        return (
          <View style={styles.container} key={article.description}>
            <Text style={styles.category}>{article.category}</Text>
            <Image
              source={{ uri: article.urlToImage }}
              style={styles.image}
            />
            
            <Text style={styles.titleText}>{article.title}</Text>
            <Text style={styles.content}>{article.content}</Text>
            
            <View style={styles.reactionContainer} key={article.category}>
            <IonIcon style={styles.reactionIcon} name={"thumbs-up-outline"} color={'#2768E7'} size={75} />
            <IonIcon style={styles.reactionIcon} name={"thumbs-down-outline"} color={'#2768E7'} size={75} />
            </View>
           
              
            
            
            {isExpanded && (
              <Text style={styles.content}>Öppnar browser</Text>
            )}
            <View style={styles.buttonContainer}>
              <Button
                title={isExpanded ? 'Show less' : 'Läs mer!'}
                onPress={() => handlePress(index)}
                color="#007aff"
              />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    padding: 25,
    backgroundColor: '#759CEA',
    opacity: 1,
  },
  container: {
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 35,
  
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    
    marginTop: 10,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    
  },
  content: {
    fontSize: 16,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
  },
  image: {
    width: '90%',
    height: 200,
    borderRadius: 20,
    marginTop: 20,
    marginLeft:'5%',
    
  },

  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  buttonText: {
    fontSize: 18,
    color: '#007aff',
  },
  reactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  reactionIcon: {
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 20,
    paddingTop: 20,
    
  }

});