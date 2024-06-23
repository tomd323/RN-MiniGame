import { View, Pressable, Text, StyleSheet, onPress } from "react-native";
import colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer}
                onPress={onPress}
                android_ripple={{ color: colors.primary600 }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden',
    },

    buttonInnerContainer: {
        backgroundColor: colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2, // shadow on Android
    },

    buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
    },

    pressed: {
        opacity: 0.75,

    },
});

