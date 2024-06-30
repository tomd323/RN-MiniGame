import { View, Text, StyleSheet } from 'react-native';


import colors from '../constants/colors';


function ScoreboardScreen() {
    return (
        <View style={styles.screen}>
            <Text>Insert Scores</Text>
        </View>
    );
}

export default ScoreboardScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
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