import { View, Pressable, Text, StyleSheet } from "react-native";

function pressHandler() {
    console.log('Button pressed');
}

function PrimaryButton({ children }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) => pressed ? [styles.pressed, styles.buttonInnerContainer] : styles.buttonInnerContainer}
                onPress={pressHandler}
                android_ripple={{ color: '#640233' }}
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
        backgroundColor: '#72063c',
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

