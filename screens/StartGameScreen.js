import { View, Pressable, TextInput, StyleSheet, Alert, Text } from 'react-native';
import { useState } from 'react';

import colors from '../constants/colors';

import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

function StartGameScreen({ onPickNumber }) {
    // State to hold the entered number
    const [enteredNumber, setEnteredNumber] = useState('');

    // Handler for updating the entered number state
    function numberInputHandler(inputText) {
        setEnteredNumber(inputText);
    }

    // Handler to reset the entered number
    function resetInputHandler() {
        setEnteredNumber('');
    }

    // Handler to confirm the entered number
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        // Validate the entered number
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number!',
                'Number has to be between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        // Pass the chosen number to the parent component
        onPickNumber(chosenNumber);
        setEnteredNumber('');
    }

    return (
        <View style={styles.rootContainer}>
            {/* Title of the screen */}
            <Title>Guess My Number</Title>
            {/* Card component containing the input and buttons */}
            <Card>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoComplete='off' // iOS only
                    autoCorrect={false} // iOS only
                    autoCapitalize='none' // iOS only
                    value={enteredNumber}
                    onChangeText={numberInputHandler}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    // Root container style
    rootContainer: {
        flex: 1,
        marginTop: 60,
        alignItems: 'center',
    },

    // Style for the number input field
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: colors.secondary500,
        borderBottomWidth: 2,
        color: colors.secondary500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    // Container for the buttons
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },

    // Container for individual buttons
    buttonContainer: {
        flex: 1,
    }
});
