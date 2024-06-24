import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ rounds, userNumber, onStartNewGame }) {
    return (
        <View style={styles.rootContainer}>
            {/* Title component displaying "Game Over" */}
            <Title>Game Over</Title>
            {/* Container for the success image */}
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            {/* Summary text displaying the number of rounds and the guessed number */}
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.Highlight}>{rounds}</Text> rounds to guess number <Text style={styles.Highlight}>{userNumber}</Text>
            </Text>
            {/* Button to start a new game */}
            <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    // Root container style
    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // Style for the image container
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: colors.primary800,
        overflow: 'hidden',
        margin: 20,
    },
    // Style for the image
    image: {
        width: '100%',
        height: '100%',
    },
    // Style for the summary text
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        color: colors.secondary500,
        textAlign: 'center',
        marginBottom: 20,
    },
    // Style for highlighted text within the summary text
    Highlight: {
        color: colors.primary500,
        fontFamily: 'open-sans-bold',
    },
});
