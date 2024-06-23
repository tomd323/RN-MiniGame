import { Text, StyleSheet } from "react-native";

import colors from "../../constants/colors";

function InstructionText({ children, customStyle }) {
    return (
        <Text style={[styles.text, customStyle]}>{children}</Text>
    );
}

export default InstructionText;

const styles = StyleSheet.create({
    text: {
        fontFamily: 'open-sans',
        color: colors.secondary500,
        fontSize: 16,
        marginVertical: 10,
    },
});