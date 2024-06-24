import { View, Text, StyleSheet, Alert } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import colors from "../constants/colors";

import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

// Function to generate a random number between min and max, excluding a specific number
function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

// Initial boundaries for the random number generation
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver, roundNumber }) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [currentRound, setCurrentRound] = useState(0);

    // Effect to check if the current guess is equal to the user number
    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
            roundNumber(currentRound);
        }
    }, [currentGuess, userNumber, onGameOver]);

    // Effect to reset boundaries when the component is mounted
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

    // Handler for generating the next guess based on the direction ('lower' or 'greater')
    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert("Don't lie!", "You know that this is wrong...", [{ text: 'Sorry!', style: 'cancel' }]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setCurrentRound((prevRound) => prevRound + 1);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText customStyle={styles.instructionText}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons name="remove" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons name="add" size={24} color="white" />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View>
                <Text style={styles.summaryText}>
                    Round:
                    <Text style={styles.Highlight}>{currentRound}</Text>
                </Text>
            </View>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },

    buttonsContainer: {
        flexDirection: 'row',
    },

    buttonContainer: {
        flex: 1,
    },

    instructionText: {
        marginBottom: 16,
    },

    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        color: colors.secondary500,
        textAlign: 'center',
        marginBottom: 20,
    },
    Highlight: {
        color: colors.primary500,
        fontFamily: 'open-sans-bold',
    },
});
