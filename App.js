import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useCallback, useEffect } from 'react';
import { StyleSheet, View, ImageBackground, SafeAreaView, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import colors from './constants/colors';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import BottomNavBar from './components/ui/BottomNavBar';
import ScoreboardScreen from './screens/ScoreBoardScreen';

// Prevents the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
  // State to hold the user number and game status
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);
  const [selectedTab, setSelectedTab] = useState('Play');

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

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
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

  // Handler for tab press events
  function handleTabPress(tab) {
    setSelectedTab(tab);
    console.log('Selected tab:', tab);
  }

  // Determine which screen to display based on selected tab
  let screen;
  switch (selectedTab) {
    case 'Play':
      screen = (
        userNumber
          ? (gameIsOver ? <GameOverScreen rounds={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler} /> : <GameScreen onGameOver={gameOverHandler} userNumber={userNumber} roundNumber={getRoundNumber} />)
          : <StartGameScreen onPickNumber={pickedNumberHandler} />
      );
      break;
    case 'Scoreboard':
      screen = <ScoreboardScreen />;
      break;
    case 'Friends':
      screen = <View style={styles.screen}><Text>Friends Screen</Text></View>;
      break;
    case 'Profile':
      screen = <View style={styles.screen}><Text>Profile Screen</Text></View>;
      break;
    default:
      screen = <View style={styles.screen}><Text>Default Screen</Text></View>;
  }

  return (
    <>
      <StatusBar style='light' />
      <LinearGradient onLayout={onLayoutRootView} colors={[colors.primary700, colors.secondary600]} style={styles.rootScreen}>
        <ImageBackground
          style={styles.rootScreen}
          source={require('./assets/images/background.png')}
          resizeMode='cover'
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
          <BottomNavBar onTabPress={handleTabPress} />
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: 'space-between',
  },
  backgroundImage: {
    opacity: 0.15,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
