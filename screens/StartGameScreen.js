import { View, Pressable, TextInput, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';



function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>

    );

}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: '#72063c',
        elevation: 8, // shadow on Android 
        shadowColor: 'black', // shadow on iOS
        shadowOffset: { width: 0, height: 2 }, // shadow on iOS
        shadowOpacity: 0.26, // shadow on iOS
        shadowRadius: 6, // shadow on iOS 

    },



});