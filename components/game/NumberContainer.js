import { View, StyleSheet, Text } from "react-native";

import colors from "../../constants/colors";

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: colors.secondary500,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },

    numberText: {
        color: colors.secondary500,
        fontSize: 36,
        fontFamily: 'open-sans-bold',
    },
}); 