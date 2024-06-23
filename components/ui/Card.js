import { View, StyleSheet } from "react-native";

import colors from "../../constants/colors";

function Card({ children }) {
    return (
        <View style={styles.card}>{children}</View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        marginTop: 40,
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
});