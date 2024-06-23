import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import colors from "../constants/colors";

function GameOverScreen() {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.Highlight}>X</Text> rounds to guess number <Text style={styles.Highlight}>Y</Text>
            </Text>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: colors.primary800,
        overflow: 'hidden',
        margin: 20,
    },
    image: {
        width: '100%',
        height: '100%',
    },

    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        color: colors.secondary500,
        textAlign: 'center',
    },
    Highlight: {
        color: colors.primary500,
        fontFamily: 'open-sans-bold',
    },

});