import { View, Pressable, TextInput, StyleSheet, } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';



function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoComplete='off' // iOS only
                autoCorrect={false} // iOS only
                autoCapitalize='none' // iOS only
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
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
        backgroundColor: '#36011c',
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
        borderBottomColor: '#ddf52f',
        borderBottomWidth: 2,
        color: '#ddf52f',
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