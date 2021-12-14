// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import Apploading from 'expo-app-loading';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './Screen/StartGameScreen';
import GameScreen from './Screen/GameScreen';
import GameOverScreen from './Screen/GameOverScreeen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return( 
    <Apploading 
    startAsync={fetchFonts} 
    onFinish={() =>  setDataLoaded(true) }
    onError = {(err) => console.log(err)}
    />
    );
  };


  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
   
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
  } else if (guessRounds > 0) {
    content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess the Number" />
      {content}


    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
