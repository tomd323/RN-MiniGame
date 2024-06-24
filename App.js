import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useCallback } from 'react';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import colors from './constants/colors';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

// Prevents the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
  // State to hold the user number and game status
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  // Load custom fonts
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  // Callback to hide the splash screen once fonts are loaded
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // If fonts are not loaded, return null to prevent rendering
  if (!fontsLoaded) {
    return null;
  }

  // Handler for when a number is picked
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  // Handler to start a new game
  function startNewGameHandler() {
    setGuessRounds(0);
    setUserNumber(null);
  }

  // Handler for when the game is over
  function gameOverHandler() {
    setGameIsOver(true);
  }

  // Handler to get the number of rounds
  function getRoundNumber(rounds) {
    setGuessRounds(rounds);
  }

  // Determine which screen to display
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen onGameOver={gameOverHandler} userNumber={userNumber} roundNumber={getRoundNumber} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen rounds={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler} />
  }

  return (
    // LinearGradient background with the splash screen hide callback
    <LinearGradient onLayout={onLayoutRootView} colors={[colors.primary700, colors.secondary600]} style={styles.rootScreen}>
      <ImageBackground
        style={styles.rootScreen}
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.15,
  },
});
