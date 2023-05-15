import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Button,
} from "react-native";
import database from "../assets/data/database.json";
import React, { useState } from "react";
import IonIcon from "react-native-vector-icons/Ionicons";
import { TouchableHighlight } from "react-native-gesture-handler";
import { WebView } from "react-native-webview";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
  const [articleStates, setArticleStates] = useState(
    database.slice(0, 5).map(() => false)
  );
  const [articleReactions, setArticleReactions] = useState(
    database.slice(0, 5).map(() => null)
  );

  // const handlePress = (index) => {
  //   setArticleStates((prev) => {
  //     const newState = [...prev];
  //     newState[index] = !prev[index];
  //     return newState;
  //   });
  // };

  const handleReactionPress = (index, reaction) => {
    setArticleReactions((prev) => {
      const newState = [...prev];
      newState[index] = reaction === prev[index] ? null : reaction;
      return newState;
    });
  };


  const [expandedArticleIndex, setExpandedArticleIndex] = useState(-1);

  const handleExpand = (index) => {
    setArticleStates((prev) => {
      const newState = [...prev];
      newState[index] = !prev[index];
      return newState;
    });
  };

  const handleClose = () => {
    setExpandedArticleIndex(-1);
  };

  

  return (
    <ScrollView style={styles.wrapper}>
      {database.slice(0, 5).map((article, index) => {
        const isExpanded = articleStates[index];
        const reaction = articleReactions[index];
        const likeColor = reaction === 'like' ? 'green' : 'green';
        //const neutralColor = reaction === null ? 'blue' : 'grey';
        const dislikeColor = reaction === 'dislike' ? 'red' : 'red';
        return (
          <View style={styles.container} key={article.description}>
            
            <View style={styles.categoryContainer}> 
              <Text style={{ ...styles.category, backgroundColor: 'red' }}>Brott</Text> 
              {/* change so that it uses a key, for instance key={article.category} */}
              <Text style={styles.category}>EU</Text>
            </View>
  
            <Image source={{ uri: article.urlToImage }} style={styles.image} />
            <Text style={styles.titleText}>{article.title}</Text>
            <Text style={styles.content}>{article.content}</Text>
  
            <View style={styles.reactionContainer}>

              <TouchableHighlight onPress={() => handleReactionPress(index, 'like')} underlayColor="transparent">
                <MaterialCommunityIcons
                  style={styles.reactionIcon}
                  name={reaction === 'like' ? 'thumb-up' : 'thumb-up-outline'}
                  color={likeColor}
                  size={90}
                />
              </TouchableHighlight>

              <TouchableHighlight onPress={() => handleReactionPress(index, 'dislike')} underlayColor="transparent" >
                <MaterialCommunityIcons
                  style={styles.reactionIcon}
                  name={reaction === 'dislike' ? 'thumb-down' : 'thumb-down-outline'}
                  color={dislikeColor}
                  size={90}
                />
              </TouchableHighlight>
  
              {/* <TouchableHighlight onPress={() => handleReactionPress(index, null)} underlayColor="transparent">
                <IonIcon
                  style={styles.reactionIcon}
                  name="icon för neutral eller nått"
                  color={neutralColor}
                  size={75}
                />
              </TouchableHighlight> */}
  
              
            </View>
  
            {isExpanded && (
              <View style={styles.articleContainer}>
              <WebView
                source={{ uri: article.url }}
                style={{flex: 1
                }}
              />
               <Button 
               title="Stäng" 
               onPress={() => handleExpand(index)} 
               style={styles.closeButton} 
              />
              </View>
            )}
  
            <View style={styles.buttonContainer}>
              <Button
                title={isExpanded ? '' : 'Läs mer'}
                onPress={() => 
                handleExpand(index)
                }
                color="#007aff"
              />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
  
}

export default HomeScreen;

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 30,
    paddingBottom: 30,
    paddingRight: 5,
    paddingLeft: 5,
    backgroundColor: '#EEEEEE',
    opacity: 1,
  },
  articleContainer: {
    position: 'absolute',
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    zIndex: 1,
    borderRadius: '30%',
    perspective: 1,
    overflow: 'hidden',
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: '30%',
    marginBottom: '2%',
    marginTop: '2%',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  content: {
    fontSize: 16,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: '5%',
    paddingLeft: '5%',
  },
  image: {
    width: '90%',
    height: 200,
    borderRadius: 20,
    marginTop: 20,
    marginLeft:'5%',
  },
  categoryContainer: {
    flexDirection: 'row',
  },

  category:{
    fontSize: 13,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    width: '20%',
    borderRadius: '11',
    marginTop: 15,
    marginLeft: '7%',
    backgroundColor: 'blue',
    padding: '01%',
    perspective: 1,
    overflow: 'hidden',
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
    paddingRight: 33,
    paddingLeft: 33,
    paddingBottom: 20,
    paddingTop: 20,
  },
});