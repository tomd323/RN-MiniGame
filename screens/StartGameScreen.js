import { View, Pressable, TextInput, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';

import colors from '../constants/colors';

import PrimaryButton from '../components/ui/PrimaryButton';


function StartGameScreen({ onPickNumber }) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(inputText) {
        setEnteredNumber(inputText);
        console.log(inputText);
    }

    function resetInputHandler() {
        setEnteredNumber('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert(
                'Invalid Number!',
                'Number has to be between 1 and 99.',
                [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
            return;
        }
        onPickNumber(chosenNumber);
        setEnteredNumber('');
    }

    return (
        <View style={styles.inputContainer}>
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

        </View>

    );

}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: colors.primary800,
        elevation: 8, // shadow on Android 
        shadowColor: 'black', // shadow on iOS
        shadowOffset: { width: 0, height: 2 }, // shadow on iOS
        shadowOpacity: 0.26, // shadow on iOS
        shadowRadius: 6, // shadow on iOS 
    },
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

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 15,
    },

    buttonContainer: {
        flex: 1,
    }
});